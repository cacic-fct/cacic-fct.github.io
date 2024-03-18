export default function ConfigureWekpackPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-configure-webpack',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [{ test: /\.txt$/, use: 'raw-loader' }],
        },
      };
    },
  };
}
