"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The file extension or preprocessor to use for style files.
 */
var Style;
(function (Style) {
    Style["Css"] = "css";
    Style["Less"] = "less";
    Style["Sass"] = "sass";
    Style["Scss"] = "scss";
    Style["Styl"] = "styl";
})(Style = exports.Style || (exports.Style = {}));
/**
 * The view encapsulation strategy to use in the initial project.
 */
var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation["Emulated"] = "Emulated";
    ViewEncapsulation["Native"] = "Native";
    ViewEncapsulation["None"] = "None";
    ViewEncapsulation["ShadowDom"] = "ShadowDom";
})(ViewEncapsulation = exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkaXN0LXNjaGVtYS9wYWNrYWdlcy9zY2hlbWF0aWNzL2FuZ3VsYXIvbmctbmV3L3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUZBQW1GO0FBQ25GLG9GQUFvRjs7QUFnR3BGOztHQUVHO0FBQ0gsSUFBWSxLQU1YO0FBTkQsV0FBWSxLQUFLO0lBQ2Isb0JBQVcsQ0FBQTtJQUNYLHNCQUFhLENBQUE7SUFDYixzQkFBYSxDQUFBO0lBQ2Isc0JBQWEsQ0FBQTtJQUNiLHNCQUFhLENBQUE7QUFDakIsQ0FBQyxFQU5XLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQU1oQjtBQUVEOztHQUVHO0FBQ0gsSUFBWSxpQkFLWDtBQUxELFdBQVksaUJBQWlCO0lBQ3pCLDBDQUFxQixDQUFBO0lBQ3JCLHNDQUFpQixDQUFBO0lBQ2pCLGtDQUFhLENBQUE7SUFDYiw0Q0FBdUIsQ0FBQTtBQUMzQixDQUFDLEVBTFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFLNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFRISVMgRklMRSBJUyBBVVRPTUFUSUNBTExZIEdFTkVSQVRFRC4gVE8gVVBEQVRFIFRISVMgRklMRSBZT1UgTkVFRCBUTyBDSEFOR0UgVEhFXG4vLyBDT1JSRVNQT05ESU5HIEpTT04gU0NIRU1BIEZJTEUsIFRIRU4gUlVOIGRldmtpdC1hZG1pbiBidWlsZCAob3IgYmF6ZWwgYnVpbGQgLi4uKS5cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tZ2xvYmFsLXRzbGludC1kaXNhYmxlXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBnaXQgcmVwb3NpdG9yeSBjb21taXQgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgY29tbWl0PzogQ29tbWl0VW5pb247XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlICh0aGUgZGVmYXVsdCksIGNyZWF0ZXMgYSBuZXcgaW5pdGlhbCBhcHAgcHJvamVjdCBpbiB0aGUgc3JjIGZvbGRlciBvZiB0aGUgbmV3XG4gICAgICogd29ya3NwYWNlLiBXaGVuIGZhbHNlLCBjcmVhdGVzIGFuIGVtcHR5IHdvcmtzcGFjZSB3aXRoIG5vIGluaXRpYWwgYXBwLiBZb3UgY2FuIHRoZW4gdXNlXG4gICAgICogdGhlIGdlbmVyYXRlIGFwcGxpY2F0aW9uIGNvbW1hbmQgc28gdGhhdCBhbGwgYXBwcyBhcmUgY3JlYXRlZCBpbiB0aGUgcHJvamVjdHMgZm9sZGVyLlxuICAgICAqL1xuICAgIGNyZWF0ZUFwcGxpY2F0aW9uPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGlyZWN0b3J5IG5hbWUgdG8gY3JlYXRlIHRoZSB3b3Jrc3BhY2UgaW4uXG4gICAgICovXG4gICAgZGlyZWN0b3J5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEVYUEVSSU1FTlRBTDogV2hlbiB0cnVlLCBjcmVhdGVzIGEgbmV3IGFwcCB0aGF0IHVzZXMgdGhlIEl2eSByZW5kZXJpbmcgZW5naW5lLlxuICAgICAqL1xuICAgIGV4cGVyaW1lbnRhbEl2eT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBpbmNsdWRlcyBzdHlsZXMgaW5saW5lIGluIHRoZSBjb21wb25lbnQgVFMgZmlsZS4gQnkgZGVmYXVsdCwgYW4gZXh0ZXJuYWxcbiAgICAgKiBzdHlsZXMgZmlsZSBpcyBjcmVhdGVkIGFuZCByZWZlcmVuY2VkIGluIHRoZSBjb21wb25lbnQgVFMgZmlsZS5cbiAgICAgKi9cbiAgICBpbmxpbmVTdHlsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBpbmNsdWRlcyB0ZW1wbGF0ZSBpbmxpbmUgaW4gdGhlIGNvbXBvbmVudCBUUyBmaWxlLiBCeSBkZWZhdWx0LCBhbiBleHRlcm5hbFxuICAgICAqIHRlbXBsYXRlIGZpbGUgaXMgY3JlYXRlZCBhbmQgcmVmZXJlbmNlZCBpbiB0aGUgY29tcG9uZW50IFRTIGZpbGUuXG4gICAgICovXG4gICAgaW5saW5lVGVtcGxhdGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbGlua3MgdGhlIENMSSB0byB0aGUgZ2xvYmFsIHZlcnNpb24gKGludGVybmFsIGRldmVsb3BtZW50IG9ubHkpLlxuICAgICAqL1xuICAgIGxpbmtDbGk/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgY3JlYXRlcyBhIHByb2plY3Qgd2l0aG91dCBhbnkgdGVzdGluZyBmcmFtZXdvcmtzLiAoVXNlIGZvciBsZWFybmluZyBwdXJwb3Nlc1xuICAgICAqIG9ubHkuKVxuICAgICAqL1xuICAgIG1pbmltYWw/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBuZXcgd29ya3NwYWNlIGFuZCBpbml0aWFsIHByb2plY3QuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXRoIHdoZXJlIG5ldyBwcm9qZWN0cyB3aWxsIGJlIGNyZWF0ZWQsIHJlbGF0aXZlIHRvIHRoZSBuZXcgd29ya3NwYWNlIHJvb3QuXG4gICAgICovXG4gICAgbmV3UHJvamVjdFJvb3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHByZWZpeCB0byBhcHBseSB0byBnZW5lcmF0ZWQgc2VsZWN0b3JzIGZvciB0aGUgaW5pdGlhbCBwcm9qZWN0LlxuICAgICAqL1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGdlbmVyYXRlcyBhIHJvdXRpbmcgbW9kdWxlIGZvciB0aGUgaW5pdGlhbCBwcm9qZWN0LlxuICAgICAqL1xuICAgIHJvdXRpbmc/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgZG9lcyBub3QgaW5pdGlhbGl6ZSBhIGdpdCByZXBvc2l0b3J5LlxuICAgICAqL1xuICAgIHNraXBHaXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgZG9lcyBub3QgaW5zdGFsbCBkZXBlbmRlbmN5IHBhY2thZ2VzLlxuICAgICAqL1xuICAgIHNraXBJbnN0YWxsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGRvZXMgbm90IGdlbmVyYXRlIFwic3BlYy50c1wiIHRlc3QgZmlsZXMgZm9yIHRoZSBuZXcgcHJvamVjdC5cbiAgICAgKi9cbiAgICBza2lwVGVzdHM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBmaWxlIGV4dGVuc2lvbiBvciBwcmVwcm9jZXNzb3IgdG8gdXNlIGZvciBzdHlsZSBmaWxlcy5cbiAgICAgKi9cbiAgICBzdHlsZT86IFN0eWxlO1xuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBbmd1bGFyIENMSSB0byB1c2UuXG4gICAgICovXG4gICAgdmVyc2lvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2aWV3IGVuY2Fwc3VsYXRpb24gc3RyYXRlZ3kgdG8gdXNlIGluIHRoZSBpbml0aWFsIHByb2plY3QuXG4gICAgICovXG4gICAgdmlld0VuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbjtcbn1cblxuLyoqXG4gKiBJbml0aWFsIGdpdCByZXBvc2l0b3J5IGNvbW1pdCBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgQ29tbWl0VW5pb24gPSBib29sZWFuIHwgQ29tbWl0T2JqZWN0O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1pdE9iamVjdCB7XG4gICAgZW1haWw6ICAgIHN0cmluZztcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIG5hbWU6ICAgICBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIGZpbGUgZXh0ZW5zaW9uIG9yIHByZXByb2Nlc3NvciB0byB1c2UgZm9yIHN0eWxlIGZpbGVzLlxuICovXG5leHBvcnQgZW51bSBTdHlsZSB7XG4gICAgQ3NzID0gXCJjc3NcIixcbiAgICBMZXNzID0gXCJsZXNzXCIsXG4gICAgU2FzcyA9IFwic2Fzc1wiLFxuICAgIFNjc3MgPSBcInNjc3NcIixcbiAgICBTdHlsID0gXCJzdHlsXCIsXG59XG5cbi8qKlxuICogVGhlIHZpZXcgZW5jYXBzdWxhdGlvbiBzdHJhdGVneSB0byB1c2UgaW4gdGhlIGluaXRpYWwgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGVudW0gVmlld0VuY2Fwc3VsYXRpb24ge1xuICAgIEVtdWxhdGVkID0gXCJFbXVsYXRlZFwiLFxuICAgIE5hdGl2ZSA9IFwiTmF0aXZlXCIsXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxuICAgIFNoYWRvd0RvbSA9IFwiU2hhZG93RG9tXCIsXG59XG4iXX0=