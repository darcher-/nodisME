import { processEnv } from "@next/env";
import "jest-environment-jsdom";
import '@testing-library/jest-dom'

export default async () => void processEnv(process.cwd());
