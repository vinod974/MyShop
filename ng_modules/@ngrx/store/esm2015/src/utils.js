/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} reducers
 * @param {?=} initialState
 * @return {?}
 */
export function combineReducers(reducers, initialState = {}) {
    /** @type {?} */
    const reducerKeys = Object.keys(reducers);
    /** @type {?} */
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i++) {
        /** @type {?} */
        const key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    /** @type {?} */
    const finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        /** @type {?} */
        let hasChanged = false;
        /** @type {?} */
        const nextState = {};
        for (let i = 0; i < finalReducerKeys.length; i++) {
            /** @type {?} */
            const key = finalReducerKeys[i];
            /** @type {?} */
            const reducer = finalReducers[key];
            /** @type {?} */
            const previousStateForKey = state[key];
            /** @type {?} */
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
/**
 * @template T
 * @param {?} object
 * @param {?} keyToRemove
 * @return {?}
 */
export function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(key => key !== keyToRemove)
        .reduce((result, key) => Object.assign(result, { [key]: object[key] }), {});
}
/**
 * @param {...?} functions
 * @return {?}
 */
export function compose(...functions) {
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        /** @type {?} */
        const last = functions[functions.length - 1];
        /** @type {?} */
        const rest = functions.slice(0, -1);
        return rest.reduceRight((composed, fn) => fn(composed), last(arg));
    };
}
/**
 * @template T, V
 * @param {?} reducerFactory
 * @param {?=} metaReducers
 * @return {?}
 */
export function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        reducerFactory = compose.apply(null, [...metaReducers, reducerFactory]);
    }
    return (reducers, initialState) => {
        /** @type {?} */
        const reducer = reducerFactory(reducers);
        return (state, action) => {
            state = state === undefined ? (/** @type {?} */ (initialState)) : state;
            return reducer(state, action);
        };
    };
}
/**
 * @template T, V
 * @param {?=} metaReducers
 * @return {?}
 */
export function createFeatureReducerFactory(metaReducers) {
    /** @type {?} */
    const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose(...metaReducers)
        : (r) => r;
    return (reducer, initialState) => {
        reducer = reducerFactory(reducer);
        return (state, action) => {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N0b3JlL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFhQSxNQUFNLFVBQVUsZUFBZSxDQUM3QixRQUFhLEVBQ2IsZUFBb0IsRUFBRTs7SUFFdEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDMUMsTUFBTSxhQUFhLEdBQVEsRUFBRSxDQUFDO0lBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztRQUMzQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDdkMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztLQUNGOztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwRCxPQUFPLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ3ZDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7UUFDbkQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDOztRQUN2QixNQUFNLFNBQVMsR0FBUSxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDaEQsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ2hDLE1BQU0sT0FBTyxHQUFRLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDeEMsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ3ZDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU3RCxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDO1lBQ2pDLFVBQVUsR0FBRyxVQUFVLElBQUksZUFBZSxLQUFLLG1CQUFtQixDQUFDO1NBQ3BFO1FBQ0QsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3ZDLENBQUM7Q0FDSDs7Ozs7OztBQUVELE1BQU0sVUFBVSxJQUFJLENBQ2xCLE1BQVMsRUFDVCxXQUFvQjtJQUVwQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUM7U0FDbEMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDL0U7Ozs7O0FBd0JELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBRyxTQUFnQjtJQUN6QyxPQUFPLFVBQVMsR0FBUTtRQUN0QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7O1FBRUQsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzdDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BFLENBQUM7Q0FDSDs7Ozs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsY0FBMEMsRUFDMUMsWUFBa0M7SUFFbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFELGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7S0FDekU7SUFFRCxPQUFPLENBQUMsUUFBZ0MsRUFBRSxZQUE4QixFQUFFLEVBQUU7O1FBQzFFLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsS0FBb0IsRUFBRSxNQUFTLEVBQUUsRUFBRTtZQUN6QyxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQUMsWUFBaUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDMUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9CLENBQUM7S0FDSCxDQUFDO0NBQ0g7Ozs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FDekMsWUFBa0M7O0lBRWxDLE1BQU0sY0FBYyxHQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNwRCxDQUFDLENBQUMsT0FBTyxDQUFzQixHQUFHLFlBQVksQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQyxDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEMsT0FBTyxDQUFDLE9BQTRCLEVBQUUsWUFBZ0IsRUFBRSxFQUFFO1FBQ3hELE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBUyxFQUFFLEVBQUU7WUFDekMsS0FBSyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMvQixDQUFDO0tBQ0gsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyRmFjdG9yeSxcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWV0YVJlZHVjZXIsXG4gIEluaXRpYWxTdGF0ZSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzPFQsIFYgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24+KFxuICByZWR1Y2VyczogQWN0aW9uUmVkdWNlck1hcDxULCBWPixcbiAgaW5pdGlhbFN0YXRlPzogUGFydGlhbDxUPlxuKTogQWN0aW9uUmVkdWNlcjxULCBWPjtcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMoXG4gIHJlZHVjZXJzOiBhbnksXG4gIGluaXRpYWxTdGF0ZTogYW55ID0ge31cbik6IEFjdGlvblJlZHVjZXI8YW55LCBBY3Rpb24+IHtcbiAgY29uc3QgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIGNvbnN0IGZpbmFsUmVkdWNlcnM6IGFueSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gaW5pdGlhbFN0YXRlIDogc3RhdGU7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXh0U3RhdGU6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIGNvbnN0IHJlZHVjZXI6IGFueSA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgY29uc3QgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9taXQ8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+KFxuICBvYmplY3Q6IFQsXG4gIGtleVRvUmVtb3ZlOiBrZXlvZiBUXG4pOiBQYXJ0aWFsPFQ+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09IGtleVRvUmVtb3ZlKVxuICAgIC5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb2JqZWN0W2tleV0gfSksIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2U8QT4oKTogKGk6IEEpID0+IEE7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBLCBCPihiOiAoaTogQSkgPT4gQik6IChpOiBBKSA9PiBCO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2U8QSwgQiwgQz4oYzogKGk6IEIpID0+IEMsIGI6IChpOiBBKSA9PiBCKTogKGk6IEEpID0+IEM7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBLCBCLCBDLCBEPihcbiAgZDogKGk6IEMpID0+IEQsXG4gIGM6IChpOiBCKSA9PiBDLFxuICBiOiAoaTogQSkgPT4gQlxuKTogKGk6IEEpID0+IEQ7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBLCBCLCBDLCBELCBFPihcbiAgZTogKGk6IEQpID0+IEUsXG4gIGQ6IChpOiBDKSA9PiBELFxuICBjOiAoaTogQikgPT4gQyxcbiAgYjogKGk6IEEpID0+IEJcbik6IChpOiBBKSA9PiBFO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2U8QSwgQiwgQywgRCwgRSwgRj4oXG4gIGY6IChpOiBFKSA9PiBGLFxuICBlOiAoaTogRCkgPT4gRSxcbiAgZDogKGk6IEMpID0+IEQsXG4gIGM6IChpOiBCKSA9PiBDLFxuICBiOiAoaTogQSkgPT4gQlxuKTogKGk6IEEpID0+IEY7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBID0gYW55LCBGID0gYW55PiguLi5mdW5jdGlvbnM6IGFueVtdKTogKGk6IEEpID0+IEY7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZSguLi5mdW5jdGlvbnM6IGFueVtdKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmc6IGFueSkge1xuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBmdW5jdGlvbnNbZnVuY3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHJlc3QgPSBmdW5jdGlvbnMuc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIHJlc3QucmVkdWNlUmlnaHQoKGNvbXBvc2VkLCBmbikgPT4gZm4oY29tcG9zZWQpLCBsYXN0KGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlckZhY3Rvcnk8VCwgViBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbj4oXG4gIHJlZHVjZXJGYWN0b3J5OiBBY3Rpb25SZWR1Y2VyRmFjdG9yeTxULCBWPixcbiAgbWV0YVJlZHVjZXJzPzogTWV0YVJlZHVjZXI8VCwgVj5bXVxuKTogQWN0aW9uUmVkdWNlckZhY3Rvcnk8VCwgVj4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShtZXRhUmVkdWNlcnMpICYmIG1ldGFSZWR1Y2Vycy5sZW5ndGggPiAwKSB7XG4gICAgcmVkdWNlckZhY3RvcnkgPSBjb21wb3NlLmFwcGx5KG51bGwsIFsuLi5tZXRhUmVkdWNlcnMsIHJlZHVjZXJGYWN0b3J5XSk7XG4gIH1cblxuICByZXR1cm4gKHJlZHVjZXJzOiBBY3Rpb25SZWR1Y2VyTWFwPFQsIFY+LCBpbml0aWFsU3RhdGU/OiBJbml0aWFsU3RhdGU8VD4pID0+IHtcbiAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkocmVkdWNlcnMpO1xuICAgIHJldHVybiAoc3RhdGU6IFQgfCB1bmRlZmluZWQsIGFjdGlvbjogVikgPT4ge1xuICAgICAgc3RhdGUgPSBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gKGluaXRpYWxTdGF0ZSBhcyBUKSA6IHN0YXRlO1xuICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZlYXR1cmVSZWR1Y2VyRmFjdG9yeTxULCBWIGV4dGVuZHMgQWN0aW9uID0gQWN0aW9uPihcbiAgbWV0YVJlZHVjZXJzPzogTWV0YVJlZHVjZXI8VCwgVj5bXVxuKTogKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgVj4sIGluaXRpYWxTdGF0ZT86IFQpID0+IEFjdGlvblJlZHVjZXI8VCwgVj4ge1xuICBjb25zdCByZWR1Y2VyRmFjdG9yeSA9XG4gICAgQXJyYXkuaXNBcnJheShtZXRhUmVkdWNlcnMpICYmIG1ldGFSZWR1Y2Vycy5sZW5ndGggPiAwXG4gICAgICA/IGNvbXBvc2U8QWN0aW9uUmVkdWNlcjxULCBWPj4oLi4ubWV0YVJlZHVjZXJzKVxuICAgICAgOiAocjogQWN0aW9uUmVkdWNlcjxULCBWPikgPT4gcjtcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgVj4sIGluaXRpYWxTdGF0ZT86IFQpID0+IHtcbiAgICByZWR1Y2VyID0gcmVkdWNlckZhY3RvcnkocmVkdWNlcik7XG5cbiAgICByZXR1cm4gKHN0YXRlOiBUIHwgdW5kZWZpbmVkLCBhY3Rpb246IFYpID0+IHtcbiAgICAgIHN0YXRlID0gc3RhdGUgPT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IHN0YXRlO1xuICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==