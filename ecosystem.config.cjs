module.exports = {
  apps: [
    {
      name: 'beg2',
      cwd: '/var/node/srv2',
      script: './src/main.ts',
      watch: true,
      interpreter: 'ts-node',
      args:["-P /var/node/srv2/"],
      error_file:"/var/node/srv2/logs/err_log",
      out_file:"/var/node/srv2/logs/out_log",
      log_file:"/var/node/srv2/logs/log"
    },
  ],
};
