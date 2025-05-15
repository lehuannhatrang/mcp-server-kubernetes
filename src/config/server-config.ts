// Get cluster name from environment variable or use the default "cluster"
const clusterName = process.env.CLUSTER_NAME || "cluster";

export const serverConfig = {
  name: "kubernetes",
  version: "0.1.0",
  clusterName, // Add cluster name to config
  capabilities: {
    resources: {},
    tools: {},
  },
} as const;
