import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { persistReducer, createTransform } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { parse, stringify } from 'flatted/esm';
import persistStore from 'redux-persist/es/persistStore';

const transformCircular = createTransform(
	(inboundState, key) => stringify(inboundState),
	(outboundState, key) => parse(outboundState),
);

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
	transforms: [transformCircular],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store, null);

export { store, persistor };
