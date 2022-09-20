<?php
defined('TYPO3') || die();


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages',
   [
      'pageicon' => [
         'exclude' => 0,
         'label' => 'Page Icon',
         'config' => [
            'type' => 'input',
            'placeholder' => 'fa-facebook',
            'default' => null,
            'eval' => 'trim',
         ],
      ],
   ]
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
   'pages',
   'pageicon'
);


	(static function() {})();
