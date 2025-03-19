import { initialise } from "conductor/dist/conductor/runner/util/";
import { RustEvaluator } from "./RustLangEvaluator";

const {runnerPlugin, conduit} = initialise(RustEvaluator);