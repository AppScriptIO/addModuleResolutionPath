"use strict";var _require$main;const path = require('path'),
moduleSystem = require('module');
const jsEntrypointPath = path.dirname(
((_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.filename) || process.cwd());






function addModuleResolutionPath({
  nodeModulePath })
{





  process.env.NODE_PATH = `${process.env.NODE_PATH || ''}${path.delimiter}${nodeModulePath}`;
  process.env.NODE_PATH = process.env.NODE_PATH.replace(new RegExp(`/(^\\${path.delimiter}+)/`), '');


  moduleSystem._initPaths();
}


function addModuleResolutionPathMultiple({ pathArray = [] }) {
  for (let nodeModulePath of pathArray) {
    addModuleResolutionPath({ nodeModulePath });
  }


  let nodePathArray = process.env.NODE_PATH.split(path.delimiter);
  let nodePathFormatted = '\t'.concat(nodePathArray.join('\n\t'));


}




module.exports = {
  addModuleResolutionPath,
  addModuleResolutionPathMultiple };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9zY3JpcHQuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGVTeXN0ZW0iLCJqc0VudHJ5cG9pbnRQYXRoIiwiZGlybmFtZSIsIm1haW4iLCJmaWxlbmFtZSIsInByb2Nlc3MiLCJjd2QiLCJhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aCIsIm5vZGVNb2R1bGVQYXRoIiwiZW52IiwiTk9ERV9QQVRIIiwiZGVsaW1pdGVyIiwicmVwbGFjZSIsIlJlZ0V4cCIsIl9pbml0UGF0aHMiLCJhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aE11bHRpcGxlIiwicGF0aEFycmF5Iiwibm9kZVBhdGhBcnJheSIsInNwbGl0Iiwibm9kZVBhdGhGb3JtYXR0ZWQiLCJjb25jYXQiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IitCQUFBLE1BQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFDRUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUR4QjtBQUVBLE1BQU1FLGdCQUFnQixHQUFHSCxJQUFJLENBQUNJLE9BQUw7QUFDdkIsa0JBQUFILE9BQU8sQ0FBQ0ksSUFBUixnRUFBY0MsUUFBZCxLQUEwQkMsT0FBTyxDQUFDQyxHQUFSLEVBREgsQ0FBekI7Ozs7Ozs7QUFRQSxTQUFTQyx1QkFBVCxDQUFpQztBQUMvQkMsRUFBQUEsY0FEK0IsRUFBakM7QUFFRzs7Ozs7O0FBTURILEVBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFZQyxTQUFaLEdBQXlCLEdBQUVMLE9BQU8sQ0FBQ0ksR0FBUixDQUFZQyxTQUFaLElBQXlCLEVBQUcsR0FBRVosSUFBSSxDQUFDYSxTQUFVLEdBQUVILGNBQWUsRUFBekY7QUFDQUgsRUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQVlDLFNBQVosR0FBd0JMLE9BQU8sQ0FBQ0ksR0FBUixDQUFZQyxTQUFaLENBQXNCRSxPQUF0QixDQUE4QixJQUFJQyxNQUFKLENBQVksUUFBT2YsSUFBSSxDQUFDYSxTQUFVLEtBQWxDLENBQTlCLEVBQXVFLEVBQXZFLENBQXhCOzs7QUFHQVgsRUFBQUEsWUFBWSxDQUFDYyxVQUFiO0FBQ0Q7OztBQUdELFNBQVNDLCtCQUFULENBQXlDLEVBQUVDLFNBQVMsR0FBRyxFQUFkLEVBQXpDLEVBQTZEO0FBQzNELE9BQUssSUFBSVIsY0FBVCxJQUEyQlEsU0FBM0IsRUFBc0M7QUFDcENULElBQUFBLHVCQUF1QixDQUFDLEVBQUVDLGNBQUYsRUFBRCxDQUF2QjtBQUNEOzs7QUFHRCxNQUFJUyxhQUFhLEdBQUdaLE9BQU8sQ0FBQ0ksR0FBUixDQUFZQyxTQUFaLENBQXNCUSxLQUF0QixDQUE0QnBCLElBQUksQ0FBQ2EsU0FBakMsQ0FBcEI7QUFDQSxNQUFJUSxpQkFBaUIsR0FBRyxLQUFLQyxNQUFMLENBQVlILGFBQWEsQ0FBQ0ksSUFBZCxDQUFtQixNQUFuQixDQUFaLENBQXhCOzs7QUFHRDs7Ozs7QUFLREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZoQixFQUFBQSx1QkFEZTtBQUVmUSxFQUFBQSwrQkFGZSxFQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyksXHJcbiAgbW9kdWxlU3lzdGVtID0gcmVxdWlyZSgnbW9kdWxlJylcclxuY29uc3QganNFbnRyeXBvaW50UGF0aCA9IHBhdGguZGlybmFtZShcclxuICByZXF1aXJlLm1haW4/LmZpbGVuYW1lIHx8IHByb2Nlc3MuY3dkKCkgLypJbiBjYXNlIHJ1biB0aHJvdWdoIGNvbW1hbmRsaW5lIC0gZS5nLiAnbm9kZSAtLWV2YWwgXCJyZXF1aXJlKHByb2Nlc3MuY3dkKCkpKClcIicgd2hlcmUgbm8gbWFpbiBlbnRyeSBtb2R1bGUgaXMgcmVnaXN0ZXJlZCAqLyxcclxuKSAvLyBlbnRyeXBvaW50IGRpcmVjdG9yeSBwYXRoIChjdXJyZW50IG5vZGVqcyBwcm9jZXNzIHJvb3QgcGF0aClcclxuXHJcbi8vIGFkZCByb290IHBhdGggKGFwcCBiYXNlIHBhdGgpIHRvIHRoZSByZXNvbHZlZCBtb2R1bGUgcGF0aHMuXHJcbi8vIERlZmluZSBzZXJ2ZXIgYmFzZSBwYXRoLiBIYWNraXNoIHdheSB0byBtYWtlIHN1cmUgdGhlIHBhdGggaXMgYWx3YXlzIGNvbnNpc3RlbnQuIEJhc2UgcGF0aCBpbiBOb2RlanMgaXMgd2hlcmUgdGhlIGNsb3Nlc3QgcGFyZW50IG5vZGVfbW9kdWxlcyBpcyBsb2NhdGVkIHRvIHRoZSBpbml0aWF0ZWQganMgc2NyaXB0LlxyXG4vLyAnJHthcHBSb290UGF0aH0nIGFsbG93cyBmb3IgZm9sZGVycy9tb2R1bGVzIGluc2lkZSB0aGUgbWFpbiBmb2xkZXIgdG8gYmUgY2FsbGVkIHdpdGggb3V0IHVzaW5nIHJlbGF0aXZlIHBhdGhzLlxyXG4vLyAnJHthcHBSb290UGF0aH0vbm9kZV9tb2R1bGVzJyBhbGxvd3MgZm9yIG1vZHVsZXMgZnJvbSB1cHBlciBoZXJhcmNoaWVzIHRvIGNhbGwgbW9kdWxlcyBmcm9tIHNpYmxpbmcgZm9sZGVycy4gZS5nLiBzb3VyY2UveCBjYWxscyBzb3VyY2UveS9ub2RlX21vZHVsZXMvbW9kdWxlXHJcbmZ1bmN0aW9uIGFkZE1vZHVsZVJlc29sdXRpb25QYXRoKHtcclxuICBub2RlTW9kdWxlUGF0aCwgLy8gcGF0aCB0byBhZGQgdG8gdGhlIG5vZGUgbW9kdWxlIHJlc29sdXRpb24gcGF0aHNcclxufSkge1xyXG4gIC8qIEFkZGluZyB0aGUgZGVmYXVsdCBub2RlX21vZHVsZXMgcGF0aCBpc24ndCBuZWNlc3NhcnkgYW55bW9yZSwgYXMgdGhlIGN1cnJlbnQgYmVoYXZpb3IgKGF0IGxlYXN0IHRocm91Z2ggYmFiZWwpIGlzIHRvIGxvYWQgTk9ERV9QQVRIIGFzIGFkZGl0aW9uYWwgcmVzb2x1dGlvbiBwYXRocywgYW5kIG5vdCBvdmVycmlkaW5nLlxyXG4gICAgYWRkIG5vZGVqcyBkZWZhdWx0IHBhdGggdG8gTk9ERV9QQVRILCBpLmUuIFwibm9kZV9tb2R1bGVzXCIgICovXHJcbiAgLy8gaWYoIXByb2Nlc3MuZW52Lk5PREVfUEFUSCkgcHJvY2Vzcy5lbnYuTk9ERV9QQVRIID0gYCR7anNFbnRyeXBvaW50UGF0aH0vbm9kZV9tb2R1bGVzYFxyXG5cclxuICAvLyBhZGQgcGF0aHMgdG8gdGhlIE5PREVfUEFUSCBzdHJpbmdcclxuICBwcm9jZXNzLmVudi5OT0RFX1BBVEggPSBgJHtwcm9jZXNzLmVudi5OT0RFX1BBVEggfHwgJyd9JHtwYXRoLmRlbGltaXRlcn0ke25vZGVNb2R1bGVQYXRofWBcclxuICBwcm9jZXNzLmVudi5OT0RFX1BBVEggPSBwcm9jZXNzLmVudi5OT0RFX1BBVEgucmVwbGFjZShuZXcgUmVnRXhwKGAvKF5cXFxcJHtwYXRoLmRlbGltaXRlcn0rKS9gKSwgJycpIC8vIFwiOjxwYXRoPjo8cGF0aD5cIiAtPiBcIjxwYXRoPjo8cGF0aD5cIiByZW1vdmUgZW1wdHkgc2VjdGlvbiBpbiB0aGUgYmVnaW5uaW5nIGluIGNhc2UgTk9ERV9QQVRIIHdhcyB1bmRlZmluZWQuXHJcblxyXG4gIC8vIExvYWQgbmV3IE5PREVfUEFUSCB2YXJpYWJsZVxyXG4gIG1vZHVsZVN5c3RlbS5faW5pdFBhdGhzKCkgLy8gcmVmbGVjdCBjaGFuZ2Ugb24gdGhlIHJ1bm5pbmcgYXBwLlxyXG59XHJcblxyXG4vLyBpbnRlcmZhY2UgZm9yIG11bHRpcGxlIHBhdGhzXHJcbmZ1bmN0aW9uIGFkZE1vZHVsZVJlc29sdXRpb25QYXRoTXVsdGlwbGUoeyBwYXRoQXJyYXkgPSBbXSB9KSB7XHJcbiAgZm9yIChsZXQgbm9kZU1vZHVsZVBhdGggb2YgcGF0aEFycmF5KSB7XHJcbiAgICBhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aCh7IG5vZGVNb2R1bGVQYXRoIH0pXHJcbiAgfVxyXG5cclxuICAvLyBMb2cgcGF0aHNcclxuICBsZXQgbm9kZVBhdGhBcnJheSA9IHByb2Nlc3MuZW52Lk5PREVfUEFUSC5zcGxpdChwYXRoLmRlbGltaXRlcikgLy8gZGVmYXVsdCBOT0RFX1BBVEggaXMgY29tcG9zZWQgb2YgcGF0aHMgc2VwYXJhdGVkIGJ5IHNlbWljb2xvbiAob25lIGNvbXBsZXRlIHN0cmluZyBvZiBwYXRocykuXHJcbiAgbGV0IG5vZGVQYXRoRm9ybWF0dGVkID0gJ1xcdCcuY29uY2F0KG5vZGVQYXRoQXJyYXkuam9pbignXFxuXFx0JykpIC8vIGFkZCBhIHRhYiBhbmQgbGluZWJyZWFrIGJldHdlZW4gcGF0aHNcclxuICAvLyBjb25zb2xlLmdyb3VwKGBcXHgxYlsybVxceDFiWzNtJXMgXFxuJXNcXHgxYlswbWAsIGDigKIgTm9kZVxcJ3MgbW9kdWxlIHJlc29sdXRpb24gcGF0aHM6YCwgYCR7bm9kZVBhdGhGb3JtYXR0ZWR9YClcclxuICAvLyBjb25zb2xlLmdyb3VwRW5kKClcclxufVxyXG5cclxuLy8gbG9nZ2luZyB3cmFwcGVyXHJcbi8vIFRPRE86IExvZyBpbnNpZGUgcHJveHkuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aCxcclxuICBhZGRNb2R1bGVSZXNvbHV0aW9uUGF0aE11bHRpcGxlLFxyXG59XHJcbiJdfQ==