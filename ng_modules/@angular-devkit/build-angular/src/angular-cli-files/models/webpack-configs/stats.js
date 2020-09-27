"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const webpackOutputOptions = {
    colors: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: false,
    children: false,
    modules: false,
    reasons: false,
    warnings: true,
    errors: true,
    assets: true,
    version: false,
    errorDetails: false,
    moduleTrace: false,
};
const verboseWebpackOutputOptions = {
    // The verbose output will most likely be piped to a file, so colors just mess it up.
    colors: false,
    usedExports: true,
    maxModules: Infinity,
    optimizationBailout: true,
    reasons: true,
    children: true,
    assets: true,
    version: true,
    chunkModules: true,
    errorDetails: true,
    moduleTrace: true,
};
function getWebpackStatsConfig(verbose = false) {
    return verbose
        ? Object.assign(webpackOutputOptions, verboseWebpackOutputOptions)
        : webpackOutputOptions;
}
exports.getWebpackStatsConfig = getWebpackStatsConfig;
function getStatsConfig(wco) {
    const verbose = !!wco.buildOptions.verbose;
    return { stats: getWebpackStatsConfig(verbose) };
}
exports.getStatsConfig = getStatsConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX2FuZ3VsYXIvc3JjL2FuZ3VsYXItY2xpLWZpbGVzL21vZGVscy93ZWJwYWNrLWNvbmZpZ3Mvc3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFJSCxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsSUFBSTtJQUNiLE1BQU0sRUFBRSxJQUFJO0lBQ1osWUFBWSxFQUFFLEtBQUs7SUFDbkIsUUFBUSxFQUFFLEtBQUs7SUFDZixPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxZQUFZLEVBQUUsS0FBSztJQUNuQixXQUFXLEVBQUUsS0FBSztDQUNuQixDQUFDO0FBRUYsTUFBTSwyQkFBMkIsR0FBRztJQUNsQyxxRkFBcUY7SUFDckYsTUFBTSxFQUFFLEtBQUs7SUFDYixXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsUUFBUTtJQUNwQixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxJQUFJO0lBQ2IsWUFBWSxFQUFFLElBQUk7SUFDbEIsWUFBWSxFQUFFLElBQUk7SUFDbEIsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQztBQUVGLFNBQWdCLHFCQUFxQixDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ25ELE9BQU8sT0FBTztRQUNaLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLDJCQUEyQixDQUFDO1FBQ2xFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztBQUMzQixDQUFDO0FBSkQsc0RBSUM7QUFFRCxTQUFnQixjQUFjLENBQUMsR0FBeUI7SUFDdEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUscUJBQXFCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUNuRCxDQUFDO0FBSkQsd0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IFdlYnBhY2tDb25maWdPcHRpb25zIH0gZnJvbSAnLi4vYnVpbGQtb3B0aW9ucyc7XG5cbmNvbnN0IHdlYnBhY2tPdXRwdXRPcHRpb25zID0ge1xuICBjb2xvcnM6IHRydWUsXG4gIGhhc2g6IHRydWUsIC8vIHJlcXVpcmVkIGJ5IGN1c3RvbSBzdGF0IG91dHB1dFxuICB0aW1pbmdzOiB0cnVlLCAvLyByZXF1aXJlZCBieSBjdXN0b20gc3RhdCBvdXRwdXRcbiAgY2h1bmtzOiB0cnVlLCAvLyByZXF1aXJlZCBieSBjdXN0b20gc3RhdCBvdXRwdXRcbiAgY2h1bmtNb2R1bGVzOiBmYWxzZSxcbiAgY2hpbGRyZW46IGZhbHNlLCAvLyBsaXN0aW5nIGFsbCBjaGlsZHJlbiBpcyB2ZXJ5IG5vaXN5IGluIEFPVCBhbmQgaGlkZXMgd2FybmluZ3MvZXJyb3JzXG4gIG1vZHVsZXM6IGZhbHNlLFxuICByZWFzb25zOiBmYWxzZSxcbiAgd2FybmluZ3M6IHRydWUsXG4gIGVycm9yczogdHJ1ZSxcbiAgYXNzZXRzOiB0cnVlLCAvLyByZXF1aXJlZCBieSBjdXN0b20gc3RhdCBvdXRwdXRcbiAgdmVyc2lvbjogZmFsc2UsXG4gIGVycm9yRGV0YWlsczogZmFsc2UsXG4gIG1vZHVsZVRyYWNlOiBmYWxzZSxcbn07XG5cbmNvbnN0IHZlcmJvc2VXZWJwYWNrT3V0cHV0T3B0aW9ucyA9IHtcbiAgLy8gVGhlIHZlcmJvc2Ugb3V0cHV0IHdpbGwgbW9zdCBsaWtlbHkgYmUgcGlwZWQgdG8gYSBmaWxlLCBzbyBjb2xvcnMganVzdCBtZXNzIGl0IHVwLlxuICBjb2xvcnM6IGZhbHNlLFxuICB1c2VkRXhwb3J0czogdHJ1ZSxcbiAgbWF4TW9kdWxlczogSW5maW5pdHksXG4gIG9wdGltaXphdGlvbkJhaWxvdXQ6IHRydWUsXG4gIHJlYXNvbnM6IHRydWUsXG4gIGNoaWxkcmVuOiB0cnVlLFxuICBhc3NldHM6IHRydWUsXG4gIHZlcnNpb246IHRydWUsXG4gIGNodW5rTW9kdWxlczogdHJ1ZSxcbiAgZXJyb3JEZXRhaWxzOiB0cnVlLFxuICBtb2R1bGVUcmFjZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWJwYWNrU3RhdHNDb25maWcodmVyYm9zZSA9IGZhbHNlKSB7XG4gIHJldHVybiB2ZXJib3NlXG4gICAgPyBPYmplY3QuYXNzaWduKHdlYnBhY2tPdXRwdXRPcHRpb25zLCB2ZXJib3NlV2VicGFja091dHB1dE9wdGlvbnMpXG4gICAgOiB3ZWJwYWNrT3V0cHV0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzQ29uZmlnKHdjbzogV2VicGFja0NvbmZpZ09wdGlvbnMpIHtcbiAgY29uc3QgdmVyYm9zZSA9ICEhd2NvLmJ1aWxkT3B0aW9ucy52ZXJib3NlO1xuXG4gIHJldHVybiB7IHN0YXRzOiBnZXRXZWJwYWNrU3RhdHNDb25maWcodmVyYm9zZSkgfTtcbn1cbiJdfQ==