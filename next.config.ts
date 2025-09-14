import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Debug information:
	
	// This was used to ensure that the issue was Typescript
	// eslint: { ignoreDuringBuilds: true },
	
	// This "fixes" the issue (by skipping type checking entirely)
	// typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
