const path=require("path");process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH=process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH||path.join(__dirname,"..","..","..","remote","node_modules"),require("../../bootstrap-node").injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),require("../../bootstrap-amd").load("vs/tym/remoteExtensionHostAgent");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/38f6d7875e3195bdaee448d2cb6917f3ae4994af/core/vs/tym/main.js.map
