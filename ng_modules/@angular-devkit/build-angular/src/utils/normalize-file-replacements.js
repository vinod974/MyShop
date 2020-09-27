"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
class MissingFileReplacementException extends core_1.BaseException {
    constructor(path) {
        super(`The ${path} path in file replacements does not exist.`);
    }
}
exports.MissingFileReplacementException = MissingFileReplacementException;
function normalizeFileReplacements(fileReplacements, host, root) {
    if (fileReplacements.length === 0) {
        return [];
    }
    const normalizedReplacement = fileReplacements
        .map(replacement => normalizeFileReplacement(replacement, root));
    for (const { replace, with: replacementWith } of normalizedReplacement) {
        if (!host.exists(replacementWith)) {
            throw new MissingFileReplacementException(core_1.getSystemPath(replacementWith));
        }
        if (!host.exists(replace)) {
            throw new MissingFileReplacementException(core_1.getSystemPath(replace));
        }
    }
    return normalizedReplacement;
}
exports.normalizeFileReplacements = normalizeFileReplacements;
function normalizeFileReplacement(fileReplacement, root) {
    const currentFormat = fileReplacement;
    const maybeOldFormat = fileReplacement;
    let replacePath;
    let withPath;
    if (maybeOldFormat.src && maybeOldFormat.replaceWith) {
        replacePath = core_1.normalize(maybeOldFormat.src);
        withPath = core_1.normalize(maybeOldFormat.replaceWith);
    }
    else {
        replacePath = core_1.normalize(currentFormat.replace);
        withPath = core_1.normalize(currentFormat.with);
    }
    // TODO: For 7.x should this only happen if not absolute?
    if (root) {
        replacePath = core_1.join(root, replacePath);
    }
    if (root) {
        withPath = core_1.join(root, withPath);
    }
    return { replace: replacePath, with: withPath };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLWZpbGUtcmVwbGFjZW1lbnRzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF9hbmd1bGFyL3NyYy91dGlscy9ub3JtYWxpemUtZmlsZS1yZXBsYWNlbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFFSCwrQ0FPOEI7QUFROUIsTUFBYSwrQkFBZ0MsU0FBUSxvQkFBYTtJQUNoRSxZQUFZLElBQVk7UUFDdEIsS0FBSyxDQUFDLE9BQU8sSUFBSSw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRjtBQUpELDBFQUlDO0FBT0QsU0FBZ0IseUJBQXlCLENBQ3ZDLGdCQUFtQyxFQUNuQyxJQUFnQyxFQUNoQyxJQUFVO0lBRVYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLHFCQUFxQixHQUFHLGdCQUFnQjtTQUMzQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuRSxLQUFLLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLHFCQUFxQixFQUFFO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSwrQkFBK0IsQ0FBQyxvQkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLElBQUksK0JBQStCLENBQUMsb0JBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ25FO0tBQ0Y7SUFFRCxPQUFPLHFCQUFxQixDQUFDO0FBQy9CLENBQUM7QUF2QkQsOERBdUJDO0FBRUQsU0FBUyx3QkFBd0IsQ0FDL0IsZUFBZ0MsRUFDaEMsSUFBVztJQUVYLE1BQU0sYUFBYSxHQUFHLGVBQXlDLENBQUM7SUFDaEUsTUFBTSxjQUFjLEdBQUcsZUFBMkMsQ0FBQztJQUVuRSxJQUFJLFdBQWlCLENBQUM7SUFDdEIsSUFBSSxRQUFjLENBQUM7SUFDbkIsSUFBSSxjQUFjLENBQUMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUU7UUFDcEQsV0FBVyxHQUFHLGdCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLFFBQVEsR0FBRyxnQkFBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNsRDtTQUFNO1FBQ0wsV0FBVyxHQUFHLGdCQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLFFBQVEsR0FBRyxnQkFBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQztJQUVELHlEQUF5RDtJQUN6RCxJQUFJLElBQUksRUFBRTtRQUNSLFdBQVcsR0FBRyxXQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsSUFBSSxJQUFJLEVBQUU7UUFDUixRQUFRLEdBQUcsV0FBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNqQztJQUVELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBCYXNlRXhjZXB0aW9uLFxuICBQYXRoLFxuICBnZXRTeXN0ZW1QYXRoLFxuICBqb2luLFxuICBub3JtYWxpemUsXG4gIHZpcnR1YWxGcyxcbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHtcbiAgQ3VycmVudEZpbGVSZXBsYWNlbWVudCxcbiAgRGVwcmVjYXRlZEZpbGVSZXBsYWNtZW50LFxuICBGaWxlUmVwbGFjZW1lbnQsXG59IGZyb20gJy4uL2Jyb3dzZXIvc2NoZW1hJztcblxuXG5leHBvcnQgY2xhc3MgTWlzc2luZ0ZpbGVSZXBsYWNlbWVudEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXRoOiBTdHJpbmcpIHtcbiAgICBzdXBlcihgVGhlICR7cGF0aH0gcGF0aCBpbiBmaWxlIHJlcGxhY2VtZW50cyBkb2VzIG5vdCBleGlzdC5gKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vcm1hbGl6ZWRGaWxlUmVwbGFjZW1lbnQge1xuICByZXBsYWNlOiBQYXRoO1xuICB3aXRoOiBQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRmlsZVJlcGxhY2VtZW50cyhcbiAgZmlsZVJlcGxhY2VtZW50czogRmlsZVJlcGxhY2VtZW50W10sXG4gIGhvc3Q6IHZpcnR1YWxGcy5TeW5jRGVsZWdhdGVIb3N0LFxuICByb290OiBQYXRoLFxuKTogTm9ybWFsaXplZEZpbGVSZXBsYWNlbWVudFtdIHtcbiAgaWYgKGZpbGVSZXBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplZFJlcGxhY2VtZW50ID0gZmlsZVJlcGxhY2VtZW50c1xuICAgIC5tYXAocmVwbGFjZW1lbnQgPT4gbm9ybWFsaXplRmlsZVJlcGxhY2VtZW50KHJlcGxhY2VtZW50LCByb290KSk7XG5cbiAgZm9yIChjb25zdCB7IHJlcGxhY2UsIHdpdGg6IHJlcGxhY2VtZW50V2l0aCB9IG9mIG5vcm1hbGl6ZWRSZXBsYWNlbWVudCkge1xuICAgIGlmICghaG9zdC5leGlzdHMocmVwbGFjZW1lbnRXaXRoKSkge1xuICAgICAgdGhyb3cgbmV3IE1pc3NpbmdGaWxlUmVwbGFjZW1lbnRFeGNlcHRpb24oZ2V0U3lzdGVtUGF0aChyZXBsYWNlbWVudFdpdGgpKTtcbiAgICB9XG5cbiAgICBpZiAoIWhvc3QuZXhpc3RzKHJlcGxhY2UpKSB7XG4gICAgICB0aHJvdyBuZXcgTWlzc2luZ0ZpbGVSZXBsYWNlbWVudEV4Y2VwdGlvbihnZXRTeXN0ZW1QYXRoKHJlcGxhY2UpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplZFJlcGxhY2VtZW50O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGaWxlUmVwbGFjZW1lbnQoXG4gIGZpbGVSZXBsYWNlbWVudDogRmlsZVJlcGxhY2VtZW50LFxuICByb290PzogUGF0aCxcbik6IE5vcm1hbGl6ZWRGaWxlUmVwbGFjZW1lbnQge1xuICBjb25zdCBjdXJyZW50Rm9ybWF0ID0gZmlsZVJlcGxhY2VtZW50IGFzIEN1cnJlbnRGaWxlUmVwbGFjZW1lbnQ7XG4gIGNvbnN0IG1heWJlT2xkRm9ybWF0ID0gZmlsZVJlcGxhY2VtZW50IGFzIERlcHJlY2F0ZWRGaWxlUmVwbGFjbWVudDtcblxuICBsZXQgcmVwbGFjZVBhdGg6IFBhdGg7XG4gIGxldCB3aXRoUGF0aDogUGF0aDtcbiAgaWYgKG1heWJlT2xkRm9ybWF0LnNyYyAmJiBtYXliZU9sZEZvcm1hdC5yZXBsYWNlV2l0aCkge1xuICAgIHJlcGxhY2VQYXRoID0gbm9ybWFsaXplKG1heWJlT2xkRm9ybWF0LnNyYyk7XG4gICAgd2l0aFBhdGggPSBub3JtYWxpemUobWF5YmVPbGRGb3JtYXQucmVwbGFjZVdpdGgpO1xuICB9IGVsc2Uge1xuICAgIHJlcGxhY2VQYXRoID0gbm9ybWFsaXplKGN1cnJlbnRGb3JtYXQucmVwbGFjZSk7XG4gICAgd2l0aFBhdGggPSBub3JtYWxpemUoY3VycmVudEZvcm1hdC53aXRoKTtcbiAgfVxuXG4gIC8vIFRPRE86IEZvciA3Lnggc2hvdWxkIHRoaXMgb25seSBoYXBwZW4gaWYgbm90IGFic29sdXRlP1xuICBpZiAocm9vdCkge1xuICAgIHJlcGxhY2VQYXRoID0gam9pbihyb290LCByZXBsYWNlUGF0aCk7XG4gIH1cbiAgaWYgKHJvb3QpIHtcbiAgICB3aXRoUGF0aCA9IGpvaW4ocm9vdCwgd2l0aFBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVwbGFjZTogcmVwbGFjZVBhdGgsIHdpdGg6IHdpdGhQYXRoIH07XG59XG4iXX0=