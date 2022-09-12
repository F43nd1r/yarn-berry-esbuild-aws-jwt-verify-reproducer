## Yarn Berry + esbuild + aws-jwt-verify

Reproducer for issue bundling a yarn berry project with esbuild when using aws-jwt-verify

Run `yarn bundle` to observe issue.

Workaround is to enable a different yarn linker, see .yarnrc.yml