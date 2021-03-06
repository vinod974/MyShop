"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const index_1 = require("../../exception/index");
class JobNameAlreadyRegisteredException extends index_1.BaseException {
    constructor(name) {
        super(`Job named ${JSON.stringify(name)} already exists.`);
    }
}
exports.JobNameAlreadyRegisteredException = JobNameAlreadyRegisteredException;
class JobDoesNotExistException extends index_1.BaseException {
    constructor(name) {
        super(`Job name ${JSON.stringify(name)} does not exist.`);
    }
}
exports.JobDoesNotExistException = JobDoesNotExistException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy9leHBlcmltZW50YWwvam9icy9leGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxpREFBc0Q7QUFHdEQsTUFBYSxpQ0FBa0MsU0FBUSxxQkFBYTtJQUNsRSxZQUFZLElBQWE7UUFDdkIsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFKRCw4RUFJQztBQUVELE1BQWEsd0JBQXlCLFNBQVEscUJBQWE7SUFDekQsWUFBWSxJQUFhO1FBQ3ZCLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBSkQsNERBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCYXNlRXhjZXB0aW9uIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uL2luZGV4JztcbmltcG9ydCB7IEpvYk5hbWUgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBjbGFzcyBKb2JOYW1lQWxyZWFkeVJlZ2lzdGVyZWRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZTogSm9iTmFtZSkge1xuICAgIHN1cGVyKGBKb2IgbmFtZWQgJHtKU09OLnN0cmluZ2lmeShuYW1lKX0gYWxyZWFkeSBleGlzdHMuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpvYkRvZXNOb3RFeGlzdEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBKb2JOYW1lKSB7XG4gICAgc3VwZXIoYEpvYiBuYW1lICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9IGRvZXMgbm90IGV4aXN0LmApO1xuICB9XG59XG4iXX0=