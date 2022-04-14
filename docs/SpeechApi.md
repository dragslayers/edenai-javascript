# EdenAiApiDocumentation.SpeechApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncSpeechToText**](SpeechApi.md#asyncSpeechToText) | **POST** /pretrained/audio/speech_recognition_async | 
[**asyncSpeechToText_0**](SpeechApi.md#asyncSpeechToText_0) | **GET** /pretrained/audio/speech_recognition_async/{job_id} | 
[**speechToText**](SpeechApi.md#speechToText) | **POST** /pretrained/audio/speech_to_text | 
[**textToSpeech**](SpeechApi.md#textToSpeech) | **POST** /pretrained/audio/text_to_speech | 


<a name="asyncSpeechToText"></a>
# **asyncSpeechToText**
> InlineResponse2001 asyncSpeechToText(language, files, providers, opts)



Speech recognition is technology that can recognize spoken words, which can then be converted to text. This endpoint allows you to launch asynchronous speech recognition jobs.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|`string`|`en-US`| |**English (GB)**|`string`|`en-GB`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Japanese**|`string`|`ja-JP`| |**Russian**|`string`|`ru-RU`| |**Arabic**|`string`|`ar-SA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`| |**Portuguese**|`string`|`pt-PT`| |**Turkish**|`string`|`tr-TR`| |**Indonesian**|`string`|`id-ID`| |**Malay**|`string`|`ms-MY`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Speechmatics**|`speechmatics`| `2.7.0` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.SpeechApi();

var language = "language_example"; // String | Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands))

var files = "/path/to/file.txt"; // File | File to analyse (ex: mp3, wav, m4a)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe])

var opts = { 
  'webhookReceiver': "webhookReceiver_example", // String | Webhook reciever should be a valid https URL (ex : https://your.listner.com/endpoint)
  'usersWebhookParameters': "usersWebhookParameters_example", // String | Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security).                    **NOTE : The data will be returned back as a string that should be decoded into a json object!**
  'vocab': "vocab_example" // String | Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.asyncSpeechToText(language, files, providers, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands)) | 
 **files** | **File**| File to analyse (ex: mp3, wav, m4a) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe]) | 
 **webhookReceiver** | **String**| Webhook reciever should be a valid https URL (ex : https://your.listner.com/endpoint) | [optional] 
 **usersWebhookParameters** | **String**| Json data that consist of additional parameters that will be sent back to the webhook receiver (ex: api key for security).                    **NOTE : The data will be returned back as a string that should be decoded into a json object!** | [optional] 
 **vocab** | **String**| Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'} | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="asyncSpeechToText_0"></a>
# **asyncSpeechToText_0**
> InlineResponse2002 asyncSpeechToText_0(jobId)



This endpoint allows you to check the state of  your asynchronous speech recognition job and returns the results if they are ready.

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.SpeechApi();

var jobId = "jobId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.asyncSpeechToText_0(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="speechToText"></a>
# **speechToText**
> InlineResponse201 speechToText(language, files, providers, opts)



Speech recognition is technology that can recognize spoken words, which can then be converted to text.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English (US)**|`string`|`en-US`| |**English (GB)**|`string`|`en-GB`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`| |**Dutch (Netherlands)**|`string`|`nl-NL`| |**Japanese**|`string`|`ja-JP`| |**Russian**|`string`|`ru-RU`| |**Arabic**|`string`|`ar-SA`| |**Italian**|`string`|`it-IT`| |**Korean**|`string`|`ko-KR`| |**Portuguese**|`string`|`pt-PT`| |**Turkish**|`string`|`tr-TR`| |**Indonesian**|`string`|`id-ID`| |**Malay**|`string`|`ms-MY`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v1.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1p1beta1`  |**Deepgram**|`deepgram`| `v1`  |**RevAi**|`revai`| `v1` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.SpeechApi();

var language = "language_example"; // String | Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands))

var files = "/path/to/file.txt"; // File | File to analyse (ex: mp3, wav, m4a)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe])

var opts = { 
  'vocab': "vocab_example" // String | Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.speechToText(language, files, providers, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish), nl-NL Dutch (Netherlands)) | 
 **files** | **File**| File to analyse (ex: mp3, wav, m4a) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google', 'threescribe]) | 
 **vocab** | **String**| Speechmatics allows to add a custom vocab dictionnary (json format) for better recognition, you can add it via this parameter.                     It has to be a list of dictionaries : {'content'(Required) : 'string', 'sounds_like'(Optional) : 'list of strings'} | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="textToSpeech"></a>
# **textToSpeech**
> InlineResponse2011 textToSpeech(text, language, option, providers)



Text-to-speech (TTS) system converts normal language text into speech.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Arabic**|`string`|`ar-XA`| |**Chinese**|`string`|`cmn-CN`| |**Danish**|`string`|`da-DK`| |**Dutch**|`string`|`nl-NL`| |**English (US)**|`string`|`en-US`| |**English (UK)**|`string`|`en-GB`| |**German**|`string`|`de-DE`| |**Italy**|`string`|`it-IT`| |**Japanese**|`string`|`ja-JP`| |**Portuguese (Brazil)**|`string`|`pt-BR`| |**Portuguese (Portugal)**|`string`|`pt-PT`| |**Russian**|`string`|`ru-RU`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Microsoft Azure**|`microsoft`| `v1.0`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Google Cloud**|`google`| `v1` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.SpeechApi();

var text = "text_example"; // String | Text to transform

var language = "language_example"; // String | Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish))

var option = "option_example"; // String | Voice gender selected (ex: FEMALE ou MALE)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google'])


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.textToSpeech(text, language, option, providers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Text to transform | 
 **language** | **String**| Language code expected (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 
 **option** | **String**| Voice gender selected (ex: FEMALE ou MALE) | 
 **providers** | **String**| Provider to compare (ex: [ 'amazon', 'microsoft', 'ibm','google']) | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

