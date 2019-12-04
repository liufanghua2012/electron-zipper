# electron-zipper
i found most of the available zip node_modules may cause errors in electron runtime, since electron made some modifications about the fs node_module for its needs - that is why electron-zipper here.

Instead of using compressing node_modules basing on fs, zip programs for windows/linux/mac platforms are directly wrapped here via the node spawn functionality.
