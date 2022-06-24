import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constants";
import * as actions from "../actions/index";

import getApi from "../fetchAPIs/callAPI";
import addApi from "../fetchAPIs/addApi";
import deleteApi from "../fetchAPIs/deleteApi";
import updateApi from "../fetchAPIs/updateApi";
import searchApi from "../fetchAPIs/searchApi";

function* getItem() {
  try {
    let res = yield getApi();
    yield put(actions.getItemSuccess({ listItem: res.listItem }));
  } catch (error) {
    yield put(actions.getItemFailure(error));
  }
}
function* addItem(action) {
  try {
    yield addApi(action.payload);
    yield put(actions.addItemSuccess());
    yield put(actions.getItemRequest());
  } catch (error) {
    yield put(actions.addItemFailure(error));
  }
}
function* deleteItem(action) {
  try {
    yield deleteApi(action.payload);
    yield put(actions.deleteItemSuccess());
    yield put(actions.getItemRequest());
  } catch (error) {
    yield put(actions.deleteItemFailure(error));
  }
}
function* updateItem(action) {
  try {
    yield updateApi(action.payload);
    yield put(actions.updateItemSuccess());
    yield put(actions.getItemRequest());
  } catch (error) {
    yield put(actions.updateItemFailure(error));
  }
}
function* searchItem(action) {
  try {
    let res = yield searchApi(action.payload);
    yield put(actions.searchItemSuccess({ listItem: res.listItem }));
  } catch (error) {
    yield put(actions.searchItemFailure(error));
  }
}
export const ItemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getItem),
  takeEvery(types.ADD_ITEM_REQUEST, addItem),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
  takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
  takeEvery(types.SEARCH_ITEM_REQUEST, searchItem),
];
