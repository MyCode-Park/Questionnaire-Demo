import apiInstance from "./axios_config";

const HttpRequest = function () {
  async function getVerb({ url, success, failure }) {
    try {
      const result = await apiInstance({
        method: "get",
        url: url,
        baseURL: "",
        headers: {
          "content-type": "application/json",
        },
        data: "",
      });
      const response = result.data;
      success(response);
    } catch (error) {
      failure(error);
    }
  }

  async function postVerb({ url, data, headers, success, failure }) {
    try {
      const result = await apiInstance({
        method: "post",
        url: url,
        baseURL: "",
        headers: headers,
        data,
      });
      const response = result.data;
      success(response);
    } catch (error) {
      failure(error);
    }
  }

  async function putVerb({ url, data, success, failure }) {
    try {
      const result = await apiInstance({
        method: "put",
        url: url,
        baseURL: "",
        headers: {
          "content-type": "application/json",
        },
        data,
      });
      const response = result.data;
      success(response);
    } catch (error) {
      failure(error);
    }
  }

  async function patchVerb({ url, success, failure }) {
    try {
      const result = await apiInstance({
        method: "PATCH",
        url: url,
        baseURL: "",
        headers: {
          "content-type": "application/json",
        },
      });
      const response = result.data;
      success(response);
    } catch (error) {
      failure(error);
    }
  }

  async function deleteVerb({ url, data, success, failure }) {
    try {
      const result = await apiInstance({
        method: "delete",
        url: url,
        baseURL: "",
        headers: {
          "content-type": "application/json",
        },
        data,
      });
      const response = result.data;
      success(response);
    } catch (error) {
      failure(error);
    }
  }

  async function downloadFileVerb({ url, success, failure }) {
    try {
      const result = await apiInstance({
        method: "get",
        url: url,
        responseType: "blob",
      });
      success(result);
    } catch (error) {
      failure(error);
    }
  }

  return {
    get: getVerb,
    post: postVerb,
    delete: deleteVerb,
    put: putVerb,
    patch: patchVerb,
    downloadFile: downloadFileVerb,
  };
};

export default HttpRequest;
