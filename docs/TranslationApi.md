# EdenAiApiDocumentation.TranslationApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automaticTranslation**](TranslationApi.md#automaticTranslation) | **POST** /pretrained/translation/automatic_translation | 
[**languageDetection**](TranslationApi.md#languageDetection) | **POST** /pretrained/translation/language_detection | 


<a name="automaticTranslation"></a>
# **automaticTranslation**
> InlineResponse2009 automaticTranslation(text, sourceLanguage, targetLanguage, providers)



Machine translation refers to the translation of a text into another language using rules, statics or ml technics.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Afrikaans**|`string`|`af-AF`| |**Albanian**|`string`|`sq-SQ`| |**Amharic**|`string`|`am-AM`| |**Arabic**|`string`|`ar-XA`| |**Armenian**|`string`|`hy-HY`| |**Azerbaijani**|`string`|`az-AZ`| |**Basque**|`string`|`eu-BA`| |**Belarusian**|`string`|`be-BE`| |**Bengali**|`string`|`bn-BN`| |**Bosnian**|`string`|`bs-BS`| |**Bulgarian**|`string`|`bg-BG`| |**Catalan**|`string`|`ca-ES`| |**Cebuano**|`string`|`ceb-CB`| |**Chinese-Simplified**|`string`|`zh-CN`| |**Chinese-Traditional**|`string`|`zh-TW`| |**Corsican**|`string`|`co-CO`| |**Croatian**|`string`|`hr-HR`| |**Czech**|`string`|`cz-CZ`| |**Danish**|`string`|`da-DK`| |**Dutch**|`string`|`nl-NL`| |**English**|`string`|`en-US`| |**Esperanto**|`string`|`eo-EO`| |**Estonian**|`string`|`et-ET`| |**Finnish**|`string`|`fn-FN`| |**French**|`string`|`fr-FR`| |**French-Canadian**|`string`|`fr-CA`| |**Frisian**|`string`|`fy-FY`| |**Galician**|`string`|`gl-GL`| |**Georgian**|`string`|`ka-KA`| |**German**|`string`|`de-DE`| |**Greek**|`string`|`gr-GR`| |**Gujarati**|`string`|`gu-GU`| |**Haitian-Creole**|`string`|`ht-HT`| |**Hausa**|`string`|`ha-HA`| |**Hawaiian**|`string`|`haw-HA`| |**Hebrew**|`string`|`he-HE`| |**Hindi**|`string`|`hi-HI`| |**Hmong**|`string`|`hmn_HM`| |**Hungarian**|`string`|`hu-HU`| |**Icelandic**|`string`|`is-IS`| |**Igbo**|`string`|`ig-IG`| |**Indonesian**|`string`|`id-ID`| |**Irish**|`string`|`ga-IR`| |**Italian**|`string`|`it-IT`| |**Japanese**|`string`|`ja-JP`| |**Javanese**|`string`|`jv-JV`| |**Kannada**|`string`|`kn-KN`| |**Kazakh**|`string`|`kk-KK`| |**Khmer**|`string`|`km-KM`| |**Korean**|`string`|`ko-KR`| |**Kurdish**|`string`|`ku-KU`| |**Kyrgyz**|`string`|`ky-KY`| |**Lao**|`string`|`lo-LO`| |**Latin**|`string`|`la-LA`| |**Latvian**|`string`|`lv-LV`| |**Lithuanian**|`string`|`lt-LT`| |**Luxembourgish**|`string`|`lb-LB`| |**Macedonian**|`string`|`mk-MK`| |**Malagasy**|`string`|`mg-MG`| |**Malay**|`string`|`ms-MY`| |**Malayalam**|`string`|`ml-ML`| |**Maltese**|`string`|`mt-MT`| |**Maori**|`string`|`mi-MI`| |**Marathi**|`string`|`mr-MR`| |**Mongolian**|`string`|`mn-MN`| |**Myanmar-Burmese**|`string`|`my-MY`| |**Nepali**|`string`|`ne-NE`| |**Norwegian**|`string`|`no-NO`| |**Nyanja Chichewa**|`string`|`ny-NY`| |**Pashto**|`string`|`ps-PS`| |**Persian**|`string`|`fa-FA`| |**Polish**|`string`|`pl-PO`| |**Portuguese**|`string`|`pt-PT`| |**Punjabi**|`string`|`pa-PA`| |**Romanian**|`string`|`ro-RO`| |**Russian**|`string`|`ru-RU`| |**Samoan**|`string`|`sm-SM`| |**Scots Gaelic**|`string`|`gd-GD`| |**Serbian**|`string`|`sr-SR`| |**Sesotho**|`string`|`st-ST`| |**Shona**|`string`|`sn-SN`| |**Sindhi**|`string`|`sd-SD`| |**Sinhala-Sinhalese**|`string`|`si-SI`| |**Slovak**|`string`|`sk-SK`| |**Slovenian**|`string`|`sl-SL`| |**Somali**|`string`|`so-SO`| |**Spanish**|`string`|`es-ES`| |**Sundanese**|`string`|`su-SU`| |**Swahili**|`string`|`sh-SH`| |**Swedish**|`string`|`sw-SW`| |**Tagalog-Filipino**|`string`|`tl-TL`| |**Tajik**|`string`|`tg-TG`| |**Tamil**|`string`|`ta-TA`| |**Telugu**|`string`|`te-TE`| |**Thai**|`string`|`th-TH`| |**Turkish**|`string`|`tr-TR`| |**Ukrainian**|`string`|`uk-UK`| |**Urdu**|`string`|`ur-UR`| |**Uzbek**|`string`|`uz-UZ`| |**Vietnamese**|`string`|`vi-VI`| |**Welsh**|`string`|`cy-CY`| |**Xhosa**|`string`|`xh-XH`| |**Yiddish**|`string`|`yi-YI`| |**Yoruba**|`string`|`yo-YO`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v3` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.TranslationApi();

var text = "text_example"; // String | Text to translate

var sourceLanguage = "sourceLanguage_example"; // String | Language code of text (ex: fr (French), en (English), es (Spanish))

var targetLanguage = "targetLanguage_example"; // String | Language code of text (ex: fr (French), en (English), es (Spanish))

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.automaticTranslation(text, sourceLanguage, targetLanguage, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to translate | 
 **sourceLanguage** | **String**| Language code of text (ex: fr (French), en (English), es (Spanish)) | 
 **targetLanguage** | **String**| Language code of text (ex: fr (French), en (English), es (Spanish)) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google']) | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="languageDetection"></a>
# **languageDetection**
> InlineResponse20010 languageDetection(text, providers)



Language Detection or language guessing is the algorithm of determining which natural language given content is in.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v3.1`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.TranslationApi();

var text = "text_example"; // String | Text to analyze

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.languageDetection(text, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to analyze | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google']) | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

