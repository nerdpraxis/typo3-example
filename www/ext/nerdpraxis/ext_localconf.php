<?php
	if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['zcustom1'])) {
		$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['zcustom1'] = 'EXT:nerdpraxis/Resources/Public/CKEditor/zcustom1.yaml';
		$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['zcustom1'] = 'EXT:nerdpraxis/Resources/Public/CKEditor/zcustom1.yaml';
	}


	$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
	if($rootlinefields != '')
	{
	    $rootlinefields .= ' , ';
	}
	$rootlinefields .= 'pageicon';
