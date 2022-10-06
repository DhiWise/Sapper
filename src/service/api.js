import { apis } from "service";

const COMMON_URL = `https://cors-anywhere.herokuapp.com/https://sandbox.api.sap.com/ariba/api/`;
const TRANSLATE_URL = `https://cors-anywhere.herokuapp.com/https://sandbox.api.sap.com/`;

const API_URLS = {
  POST_TRANSLATIONSTRICT_MODEFALSETARGET_LANGUAGEJA_J_PSOURCE_LANGUAGEEN_U_S: `${TRANSLATE_URL}sapdocumenttranslation/translation`,
  GET_INVOICES: `${COMMON_URL}invoice-extraction/v1/sandbox/invoices`,
  POST_VENDORS: `${COMMON_URL}supplier-invite/v2/sandbox/vendors`,
  GET_SHIP_NOTICES: `${COMMON_URL}ship-notices-buyer/v1/sandbox/shipNotices`,
  GET_ORDERS: `${COMMON_URL}purchase-orders/v1/sandbox/orders`,
  GET_ITEMS: `${COMMON_URL}purchase-orders/v1/sandbox/items`,
};

export const postTranslationstrictModefalsetargetLanguagejaJPsourceLanguageenUS =
  (payload) =>
    apis.post(
      API_URLS.POST_TRANSLATIONSTRICT_MODEFALSETARGET_LANGUAGEJA_J_PSOURCE_LANGUAGEEN_U_S,
      {
        ...payload,
        params: {
          strictMode: "false",
          ...payload?.params,
        },
        headers: {
          "Content-Type": "application/json",
          accept: "application/octet-stream",
          ...payload?.headers,
        },
      }
    );

export const getInvoices = (payload) =>
  apis.get(API_URLS.GET_INVOICES, {
    ...payload,
    headers: { "X-ARIBA-NETWORK-ID": "AN02000000218", ...payload?.headers },
  });

export const postVendors = (payload) =>
  apis.post(API_URLS.POST_VENDORS, {
    ...payload,
    headers: {
      "Content-Type": "application/json",
      "X-ARIBA-NETWORK-ID": "AN02001779393",
      ...payload?.headers,
    },
  });

export const getShipNotices = (payload) =>
  apis.get(API_URLS.GET_SHIP_NOTICES, payload);

export const getOrders = (payload) =>
  apis.get(API_URLS.GET_ORDERS, {
    ...payload,
    headers: { "X-ARIBA-NETWORK-ID": "AN02000000280", ...payload?.headers },
  });

export const getItems = (payload) =>
  apis.get(API_URLS.GET_ITEMS, {
    ...payload,
    headers: { "X-ARIBA-NETWORK-ID": "AN02000000280", ...payload?.headers },
  });
