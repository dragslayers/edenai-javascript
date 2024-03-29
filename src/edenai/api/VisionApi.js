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
import {InlineResponse20010} from '../model/InlineResponse20010';
import {InlineResponse20011} from '../model/InlineResponse20011';
import {InlineResponse2009} from '../model/InlineResponse2009';

/**
* Vision service.
* @module edenai/api/VisionApi
* @version v1
*/
export class VisionApi {

    /**
    * Constructs a new VisionApi. 
    * @alias module:edenai/api/VisionApi
    * @class
    * @param {module:edenai/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:edenai/ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the explicitContentDetection operation.
     * @callback moduleedenai/api/VisionApi~explicitContentDetectionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse2009{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Explicit Content Detection detects adult only content in videos, who is generally inappropriate for people under the age of 18 and includes nudity, sexual activity and pornography ...  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|
     * @param {Blob} files 
     * @param {String} providers 
     * @param {module:edenai/api/VisionApi~explicitContentDetectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    explicitContentDetection(files, providers, callback) {
      
      let postBody = null;
      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling explicitContentDetection");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling explicitContentDetection");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'files': files,'providers': providers
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/pretrained/vision/explicit_content_detection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the faceDetection operation.
     * @callback moduleedenai/api/VisionApi~faceDetectionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse20010{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Face Detection is a computer technology being used in a variety of applicationsthat identifies human faces in digital images.  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|
     * @param {Blob} files 
     * @param {String} providers 
     * @param {module:edenai/api/VisionApi~faceDetectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    faceDetection(files, providers, callback) {
      
      let postBody = null;
      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling faceDetection");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling faceDetection");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'files': files,'providers': providers
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/pretrained/vision/face_detection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the objectDetection operation.
     * @callback moduleedenai/api/VisionApi~objectDetectionCallback
     * @param {String} error Error message, if any.
     * @param {module:edenai/model/InlineResponse20011{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Object Detection is a computer vision technique that allows us to identify and locate objects in an image or video  **AVAILABLE PROVIDERS**   |Name|Value|Version| |----|-----|-------| |[**Microsoft Azure**](https://www.edenai.co/catalog/azure-computer-vision)|&#x60;microsoft&#x60;|&#x60;v3.2&#x60;| |[**Amazon Web Services**](https://www.edenai.co/catalog/amazon-rekognition)|&#x60;amazon&#x60;|&#x60;boto3 (v1.15.18)&#x60;| |[**Google Cloud**](https://www.edenai.co/catalog/google-cloud-vision)|&#x60;google&#x60;|&#x60;v1&#x60;|
     * @param {Blob} files 
     * @param {String} providers 
     * @param {module:edenai/api/VisionApi~objectDetectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    objectDetection(files, providers, callback) {
      
      let postBody = null;
      // verify the required parameter 'files' is set
      if (files === undefined || files === null) {
        throw new Error("Missing the required parameter 'files' when calling objectDetection");
      }
      // verify the required parameter 'providers' is set
      if (providers === undefined || providers === null) {
        throw new Error("Missing the required parameter 'providers' when calling objectDetection");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'files': files,'providers': providers
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20011;

      return this.apiClient.callApi(
        '/pretrained/vision/object_detection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}