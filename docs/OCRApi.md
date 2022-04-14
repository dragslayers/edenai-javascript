# EdenAiApiDocumentation.OCRApi

All URIs are relative to *https://api.edenai.run/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocr**](OCRApi.md#ocr) | **POST** /pretrained/ocr/ocr | 
[**ocrInvoice**](OCRApi.md#ocrInvoice) | **POST** /pretrained/ocr/ocr_invoice | 


<a name="ocr"></a>
# **ocr**
> InlineResponse2003 ocr(files, providers, language)



Optical Character Recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Arabic**|`string`|`ar-XA`| |**Chinese - Simplified**|`string`|`zh-CN`| |**Chinese - Traditional**|`string`|`zh-TW`| |**Czech**|`string`|`cz-CZ`| |**Danish**|`string`|`da-DK`| |**Dutch**|`string`|`nl-NL`| |**English**|`string`|`en-US`| |**Finnish**|`string`|`fn-FN`| |**French**|`string`|`fr-FR`| |**German**|`string`|`de-DE`| |**Greek**|`string`|`gr-GR`| |**Hungarian**|`string`|`hu-HU`| |**Italian**|`string`|`it-IT`| |**Japanese**|`string`|`ja-JP`| |**Korean**|`string`|`ko-KR`| |**Polish**|`string`|`pl-PO`| |**Portuguese**|`string`|`pt-PT`| |**Russian**|`string`|`ru-RU`| |**Swedish**|`string`|`sw-SW`| |**Spanish**|`string`|`es-ES`| |**Turkish**|`string`|`tr-TR`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Google Cloud**|`google`| `v1`  |**Microsoft Azure**|`microsoft`| `v3.2`  |**Amazon Web Services**|`amazon`| `boto3 (v1.15.18)`  |**Clarifai**|`clarifai`| `8.0.0`  |**Base64**|`base64`| `latest`  |**Tesseract**|`tesseract`| `latest` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.OCRApi();

var files = "/path/to/file.txt"; // File | File to analyse (ex: pdf, jpg, jpeg, png, tiff)

var providers = "providers_example"; // String | Providers to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google'])

var language = "language_example"; // String | Language code expected (ex: fr-FR)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.ocr(files, providers, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File to analyse (ex: pdf, jpg, jpeg, png, tiff) | 
 **providers** | **String**| Providers to compare (ex: [ 'amazon', 'microsoft', 'ibm', 'google']) | 
 **language** | **String**| Language code expected (ex: fr-FR) | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="ocrInvoice"></a>
# **ocrInvoice**
> InlineResponse2004 ocrInvoice(files, providers, language)



The OCR Invoice API enables customers to take invoices in a variety of formats and return structured data to automate the invoice processing.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**English(US)**|`string`|`en-US`| |**French**|`string`|`fr-FR`| |**Spanish**|`string`|`es-ES`|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |**Mindee**|`mindee`| `v2`  |**Base64**|`base64`| `latest`  |**Dataleon**|`dataleon`| `v3.1.0`  |**Microsoft Azure**|`microsoft`| `v2.1-preview.3` 

### Example
```javascript
var EdenAiApiDocumentation = require('eden_ai_api_documentation');
var defaultClient = EdenAiApiDocumentation.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new EdenAiApiDocumentation.OCRApi();

var files = "/path/to/file.txt"; // File | File Image to analyse (ex: pdf, jpg, jpeg, png)

var providers = "providers_example"; // String | Provider to compare (ex: [ 'mindee', 'microsoft'])

var language = "language_example"; // String | Language code of invoice (ex: fr-FR (French), en-US (English), es-ES (Spanish))


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , data.result);
  }
};
apiInstance.ocrInvoice(files, providers, language, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **File**| File Image to analyse (ex: pdf, jpg, jpeg, png) | 
 **providers** | **String**| Provider to compare (ex: [ 'mindee', 'microsoft']) | 
 **language** | **String**| Language code of invoice (ex: fr-FR (French), en-US (English), es-ES (Spanish)) | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

