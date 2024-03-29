/*
 * Eden AI API Documentation
 * <a href=\"https://app.edenai.run/user/login\" target=\"_blank\"><img src=\"/static/images/welcome.png\"></a>. # Welcome  Eden AI simplifies the use and integration of AI technologies by providing a unique API connected to the best AI engines and combined with a powerful management platform. The platform covers a wide range of AI technologies: * Vision:  <a href=\"https://www.edenai.co/vision\" target=\"_blank\">www.edenai.co/vision</a>. * Text & NLP: <a href=\"https://www.edenai.co/text\" target=\"_blank\">www.edenai.co/text</a>. * Speech & Audio: <a href=\"https://www.edenai.co/speech\" target=\"_blank\">www.edenai.co/speech</a>. * OCR: <a href=\"https://www.edenai.co/ocr\" target=\"_blank\">www.edenai.co/ocr</a>. * Machine Translation: <a href=\"https://www.edenai.co/translation\" target=\"_blank\">www.edenai.co/translation</a>. * Prediction: <a href=\"https://www.edenai.co/prediction\" target=\"_blank\">www.edenai.co/prediction</a>.  For all the proposed technologies, we provide a single endpoint:  the service provider is only a parameter that can be changed very easily. All the engines available on Eden AI are listed here: www.edenai.co/catalog  # Support & community  ### 1- Support If you have any problems, please contact us at this email address: contact@edenai.co. We will be happy to help you in the use of Eden AI.   ### 2- Community  You can interact personally with other people actively using and working with Eden AI and join our  <a href=\"https://join.slack.com/t/edenai/shared_invite/zt-t68c2pr9-4lDKQ_qEqmLiWNptQzB_6w\" target=\"_blank\">Slack community</a>.  We are always updating our docs, so a good way to always stay up to date is to watch our documentation repo on Github: <a href=\"https://github.com/edenai\" target=\"_blank\">https://github.com/edenai</a>.  ### 3- Blog  We also regularly publish various articles with Eden AI news and technical articles on the different AI engines that exist. You can find these articles here: <a href=\"https://www.edenai.co/blog\" target=\"_blank\">https://www.edenai.co/blog</a>.   # Authentication  ## Create account ![Register](/static/images/register.png)  To create an account, please go to this link: <a href=\"https://app.edenai.run/user/login\" target=\"_blank\">app.edenai.run/user/login</a>. You can create an account with your email address or by using your account on available platforms (Gmail, Github, etc.).   By creating an account with your email address, you will receive a confirmation email with a link to click. Check your spam if needed and contact us if you have any problem: contact@edenai.co  ![Login](/static/images/login.png) ## API key  By going to your account page on the platform: <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">https://app.edenai.run/admin/account</a>, you will have access to your API key to start using the different AI engines offered by Eden AI.   ![api_key](/static/images/api_key.png) # Portal Guide  Eden AI provides a web portal that allows you to do several tasks:  ![portal](/static/images/portal.png)  ### 1- Benchmark and test The platform allows you to easily compare competing engines without having to code. By uploading your data, you have access to the prediction results of the different engines. This gives you a first overview of the performance of AI engines.   ![benchmark](/static/images/benchmark.png)  ### 2- Cost management The <a href=\"https://app.edenai.run/admin/cost-management\" target=\"_blank\">cost management page</a> also allows you to centralize the costs associated with the different engines with various filters to simplify the analysis.   This page also allows you to define monthly budget limits not to be exceeded to secure the use of different AI engines.   ![cost-management](/static/images/cost_management.png) ### 3- Account The <a href=\"https://app.edenai.run/admin/account\" target=\"_blank\">account page</a> allows you to change your information and password. It also gives you access to your API key that you can renew if needed.   This page also allows you to add a credit card and to buy with credits to use all the engines offered by Eden AI.   ![account](/static/images/account.png)   # API Guide  Eden AI API has different endpoints that refer to different AI services. The connected providers are thus parameters that the user can easily change. 
 *
 * OpenAPI spec version: v1
 * Contact: contact@edenai.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.31
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {InlineResponse2007} from '../model/InlineResponse2007';
import {InlineResponse2008} from '../model/InlineResponse2008';

/**
* Translation service.
* @module edenai/api/TranslationApi
* @version v1
*/
export class TranslationApi {

    /**
    * Constructs a new TranslationApi. 
    * @alias module:edenai/api/TranslationApi
    * @class
    * @param {module:edenai/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:edenai/ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the automaticTranslation operation.
     * @callback moduleedenai/api/TranslationApi~automaticTranslationCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2007{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Machine translation refers to the translation of a text into another language using rules, statics or ml technics.  **SUPPORTED LANGUAGE**  |Name|Type|Value| |----|----|-----| |**Afrikaans**|&#x60;string&#x60;|&#x60;af-AF&#x60;| |**Albanian**|&#x60;string&#x60;|&#x60;sq-SQ&#x60;| |**Amharic**|&#x60;string&#x60;|&#x60;am-AM&#x60;| |**Arabic**|&#x60;string&#x60;|&#x60;ar-XA&#x60;| |**Armenian**|&#x60;string&#x60;|&#x60;hy-HY&#x60;| |**Azerbaijani**|&#x60;string&#x60;|&#x60;az-AZ&#x60;| |**Basque**|&#x60;string&#x60;|&#x60;eu-BA&#x60;| |**Belarusian**|&#x60;string&#x60;|&#x60;be-BE&#x60;| |**Bengali**|&#x60;string&#x60;|&#x60;bn-BN&#x60;| |**Bosnian**|&#x60;string&#x60;|&#x60;bs-BS&#x60;| |**Bulgarian**|&#x60;string&#x60;|&#x60;bg-BG&#x60;| |**Catalan**|&#x60;string&#x60;|&#x60;ca-ES&#x60;| |**Cebuano**|&#x60;string&#x60;|&#x60;ceb-CB&#x60;| |**Chinese-Simplified**|&#x60;string&#x60;|&#x60;zh-CN&#x60;| |**Chinese-Traditional**|&#x60;string&#x60;|&#x60;zh-TW&#x60;| |**Corsican**|&#x60;string&#x60;|&#x60;co-CO&#x60;| |**Croatian**|&#x60;string&#x60;|&#x60;hr-HR&#x60;| |**Czech**|&#x60;string&#x60;|&#x60;cz-CZ&#x60;| |**Danish**|&#x60;string&#x60;|&#x60;da-DK&#x60;| |**Dutch**|&#x60;string&#x60;|&#x60;nl-NL&#x60;| |**English**|&#x60;string&#x60;|&#x60;en-US&#x60;| |**Esperanto**|&#x60;string&#x60;|&#x60;eo-EO&#x60;| |**Estonian**|&#x60;string&#x60;|&#x60;et-ET&#x60;| |**Finnish**|&#x60;string&#x60;|&#x60;fn-FN&#x60;| |**French**|&#x60;string&#x60;|&#x60;fr-FR&#x60;| |**French-Canadian**|&#x60;string&#x60;|&#x60;fr-CA&#x60;| |**Frisian**|&#x60;string&#x60;|&#x60;fy-FY&#x60;| |**Galician**|&#x60;string&#x60;|&#x60;gl-GL&#x60;| |**Georgian**|&#x60;string&#x60;|&#x60;ka-KA&#x60;| |**German**|&#x60;string&#x60;|&#x60;de-DE&#x60;| |**Greek**|&#x60;string&#x60;|&#x60;gr-GR&#x60;| |**Gujarati**|&#x60;string&#x60;|&#x60;gu-GU&#x60;| |**Haitian-Creole**|&#x60;string&#x60;|&#x60;ht-HT&#x60;| |**Hausa**|&#x60;string&#x60;|&#x60;ha-HA&#x60;| |**Hawaiian**|&#x60;string&#x60;|&#x60;haw-HA&#x60;| |**Hebrew**|&#x60;string&#x60;|&#x60;he-HE&#x60;| |**Hindi**|&#x60;string&#x60;|&#x60;hi-HI&#x60;| |**Hmong**|&#x60;string&#x60;|&#x60;hmn_HM&#x60;| |**Hungarian**|&#x60;string&#x60;|&#x60;hu-HU&#x60;| |**Icelandic**|&#x60;string&#x60;|&#x60;is-IS&#x60;| |**Igbo**|&#x60;string&#x60;|&#x60;ig-IG&#x60;| |**Indonesian**|&#x60;string&#x60;|&#x60;id-ID&#x60;| |**Irish**|&#x60;string&#x60;|&#x60;ga-IR&#x60;| |**Italian**|&#x60;string&#x60;|&#x60;it-IT&#x60;| |**Japanese**|&#x60;string&#x60;|&#x60;ja-JP&#x60;| |**Javanese**|&#x60;string&#x60;|&#x60;jv-JV&#x60;| |**Kannada**|&#x60;string&#x60;|&#x60;kn-KN&#x60;| |**Kazakh**|&#x60;string&#x60;|&#x60;kk-KK&#x60;| |**Khmer**|&#x60;string&#x60;|&#x60;km-KM&#x60;| |**Korean**|&#x60;string&#x60;|&#x60;ko-KR&#x60;| |**Kurdish**|&#x60;string&#x60;|&#x60;ku-KU&#x60;| |**Kyrgyz**|&#x60;string&#x60;|&#x60;ky-KY&#x60;| |**Lao**|&#x60;string&#x60;|&#x60;lo-LO&#x60;| |**Latin**|&#x60;string&#x60;|&#x60;la-LA&#x60;| |**Latvian**|&#x60;string&#x60;|&#x60;lv-LV&#x60;| |**Lithuanian**|&#x60;string&#x60;|&#x60;lt-LT&#x60;| |**Luxembourgish**|&#x60;string&#x60;|&#x60;lb-LB&#x60;| |**Macedonian**|&#x60;string&#x60;|&#x60;mk-MK&#x60;| |**Malagasy**|&#x60;string&#x60;|&#x60;mg-MG&#x60;| |**Malay**|&#x60;string&#x60;|&#x60;ms-MY&#x60;| |**Malayalam**|&#x60;string&#x60;|&#x60;ml-ML&#x60;| |**Maltese**|&#x60;string&#x60;|&#x60;mt-MT&#x60;| |**Maori**|&#x60;string&#x60;|&#x60;mi-MI&#x60;| |**Marathi**|&#x60;string&#x60;|&#x60;mr-MR&#x60;| |**Mongolian**|&#x60;string&#x60;|&#x60;mn-MN&#x60;| |**Myanmar-Burmese**|&#x60;string&#x60;|&#x60;my-MY&#x60;| |**Nepali**|&#x60;string&#x60;|&#x60;ne-NE&#x60;| |**Norwegian**|&#x60;string&#x60;|&#x60;no-NO&#x60;| |**Nyanja Chichewa**|&#x60;string&#x60;|&#x60;ny-NY&#x60;| |**Pashto**|&#x60;string&#x60;|&#x60;ps-PS&#x60;| |**Persian**|&#x60;string&#x60;|&#x60;fa-FA&#x60;| |**Polish**|&#x60;string&#x60;|&#x60;pl-PO&#x60;| |**Portuguese**|&#x60;string&#x60;|&#x60;pt-PT&#x60;| |**Punjabi**|&#x60;string&#x60;|&#x60;pa-PA&#x60;| |**Romanian**|&#x60;string&#x60;|&#x60;ro-RO&#x60;| |**Russian**|&#x60;string&#x60;|&#x60;ru-RU&#x60;| |**Samoan**|&#x60;string&#x60;|&#x60;sm-SM&#x60;| |**Scots Gaelic**|&#x60;string&#x60;|&#x60;gd-GD&#x60;| |**Serbian**|&#x60;string&#x60;|&#x60;sr-SR&#x60;| |**Sesotho**|&#x60;string&#x60;|&#x60;st-ST&#x60;| |**Shona**|&#x60;string&#x60;|&#x60;sn-SN&#x60;| |**Sindhi**|&#x60;string&#x60;|&#x60;sd-SD&#x60;| |**Sinhala-Sinhalese**|&#x60;string&#x60;|&#x60;si-SI&#x60;| |**Slovak**|&#x60;string&#x60;|&#x60;sk-SK&#x60;| |**Slovenian**|&#x60;string&#x60;|&#x60;sl-SL&#x60;| |**Somali**|&#x60;string&#x60;|&#x60;so-SO&#x60;| |**Spanish**|&#x60;string&#x60;|&#x60;es-ES&#x60;| |**Sundanese**|&#x60;string&#x60;|&#x60;su-SU&#x60;| |**Swahili**|&#x60;string&#x60;|&#x60;sh-SH&#x60;| |**Swedish**|&#x60;string&#x60;|&#x60;sw-SW&#x60;| |**Tagalog-Filipino**|&#x60;string&#x60;|&#x60;tl-TL&#x60;| |**Tajik**|&#x60;string&#x60;|&#x60;tg-TG&#x60;| |**Tamil**|&#x60;string&#x60;|&#x60;ta-TA&#x60;| |**Telugu**|&#x60;string&#x60;|&#x60;te-TE&#x60;| |**Thai**|&#x60;string&#x60;|&#x60;th-TH&#x60;| |**Turkish**|&#x60;string&#x60;|&#x60;tr-TR&#x60;| |**Ukrainian**|&#x60;string&#x60;|&#x60;uk-UK&#x60;| |**Urdu**|&#x60;string&#x60;|&#x60;ur-UR&#x60;| |**Uzbek**|&#x60;string&#x60;|&#x60;uz-UZ&#x60;| |**Vietnamese**|&#x60;string&#x60;|&#x60;vi-VI&#x60;| |**Welsh**|&#x60;string&#x60;|&#x60;cy-CY&#x60;| |**Xhosa**|&#x60;string&#x60;|&#x60;xh-XH&#x60;| |**Yiddish**|&#x60;string&#x60;|&#x60;yi-YI&#x60;| |**Yoruba**|&#x60;string&#x60;|&#x60;yo-YO&#x60;|  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-translator)|&#x60;microsoft&#x60;|&#x60;v3.0&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-translate)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-translation)|&#x60;google&#x60;|&#x60;v3&#x60;|
     * @param {String} text 
     * @param {String} sourceLanguage 
     * @param {String} targetLanguage 
     * @param {String} providers 
     * @param {String} text 
     * @param {String} sourceLanguage 
     * @param {String} targetLanguage 
     * @param {String} providers 
     * @param {module:edenai/api/TranslationApi~automaticTranslationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    automaticTranslation(text, sourceLanguage, targetLanguage, providers, text, sourceLanguage, targetLanguage, providers, callback) {
      
      let postBody = null;
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling automaticTranslation");
      }
      // verify the required parameter 'sourceLanguage' is set
      if (sourceLanguage === undefined || sourceLanguage === null) {
        throw new Error("Missing the required parameter 'sourceLanguage' when calling automaticTranslation");
      }
      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling automaticTranslation");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling automaticTranslation");
      }
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling automaticTranslation");
      }
      // verify the required parameter 'sourceLanguage' is set
      if (sourceLanguage === undefined || sourceLanguage === null) {
        throw new Error("Missing the required parameter 'sourceLanguage' when calling automaticTranslation");
      }
      // verify the required parameter 'targetLanguage' is set
      if (targetLanguage === undefined || targetLanguage === null) {
        throw new Error("Missing the required parameter 'targetLanguage' when calling automaticTranslation");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling automaticTranslation");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'text': text,'source_language': sourceLanguage,'target_language': targetLanguage,'providers': providers,'text': text,'source_language': sourceLanguage,'target_language': targetLanguage,'providers': providers
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/pretrained/translation/automatic_translation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the langiageDetection operation.
     * @callback moduleedenai/api/TranslationApi~langiageDetectionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2008{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Language Detection or language guessing is the algorithm of determining which natural language given content is in.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-translator)|&#x60;microsoft&#x60;|&#x60;v3.1&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-translate)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-translation)|&#x60;google&#x60;|&#x60;v1&#x60;| |[**Lettria**](https://www.edenai.co/catalog/Lettria)|&#x60;lettria&#x60;|&#x60;v5.5.2&#x60;|
     * @param {String} text 
     * @param {String} providers 
     * @param {String} text 
     * @param {String} providers 
     * @param {module:edenai/api/TranslationApi~langiageDetectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    langiageDetection(text, providers, text, providers, callback) {
      
      let postBody = null;
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling langiageDetection");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling langiageDetection");
      }
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling langiageDetection");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling langiageDetection");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'text': text,'providers': providers,'text': text,'providers': providers
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/pretrained/translation/language_detection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}