function addComments(arg, name) {
  // 当参数前的注释不存在的情况, 加入 webpackChunkName 注释
  if (!arg.leadingComments) {
    arg.leadingComments = [
      {
        type: 'CommentBlock',
        value: ` webpackChunkName: '${name}' `
      }
    ];
  }
}

module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: 'ast-transform',
    visitor: {
      CallExpression: function(path) {
        const { node } = path;
        if (t.isImport(node.callee)) {
          const arg0 = node.arguments[0];
          const name = arg0.value;
          addComments(arg0, name.replace(/.*\/(.*)$/, '$1'));
        }
      }
    }
  };
};
