#COPY ./www/ /usr/local/apache2/htdocs/
#COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
# Enable apache rewrite


#
# NOTE: THIS DOCKERFILE IS GENERATED VIA "apply-templates.sh"
#
# PLEASE DO NOT EDIT IT DIRECTLY.
#

FROM php:7.4-apache

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "nano"]
RUN a2enmod rewrite

WORKDIR /var/www/html

COPY ./www /var/www/


RUN chown -R www-data:www-data /var/www

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        wget \
# Configure PHP
        libxml2-dev libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libpq-dev \
        libzip-dev \
        zlib1g-dev \
# Install required 3rd party tools
        graphicsmagick && \
# Configure extensions
    docker-php-ext-configure gd --with-libdir=/usr/include/ --with-jpeg --with-freetype && \
    docker-php-ext-install -j$(nproc) mysqli soap gd zip opcache intl pgsql pdo_pgsql && \
    echo 'always_populate_raw_post_data = -1\nmax_execution_time = 240\nmax_input_vars = 1500\nupload_max_filesize = 32M\npost_max_size = 32M' > /usr/local/etc/php/conf.d/typo3.ini && \
# Configure Apache as needed
    a2enmod rewrite && \
    apt-get clean && \
    apt-get -y purge \
        libxml2-dev libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libzip-dev \
        zlib1g-dev && \
    rm -rf /var/lib/apt/lists/* /usr/src/*

#RUN apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng12-dev
#RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
#RUN docker-php-ext-install -j$(nproc) gd


RUN rm -f /etc/apache2/sites-available/000-default.conf
RUN rm -f /etc/apache2/sites-available/default-ssl.conf
COPY ./000-default.conf /etc/apache2/sites-available
COPY ./default-ssl.conf /etc/apache2/sites-available

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# RUN docker-php-ext-install mysqli
# NODE JS INSTALLIEREN
#RUN apt-get update
#RUN apt-get install nodejs

#ENV MYSQL_ROOT_PASSWORD=Ktho9spo
#ENV MYSQL_ROOT_USER=nerdpraxis

# DIES NUR EINMAL AUSFÜHREN (SORGT DAFÜR DAS APACHE IM BG LÄUFT)
#CMD ["executable","param1","param2"]

# APACHE site hinzufügen und neustarten
#RUN a2ensite docker-php.conf
#RUN service apache2 restart

#COPY ./docker-php.conf /etc/apache2/conf-available/docker-php.conf

# Copy php ini
COPY php.ini /usr/local/etc/php/php.ini

