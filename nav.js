const nav = {
    "name": "DoE",
    "tab": "DoE",
    "buttons": [
        "./DoE overview",
        "./createDoEFactorTable",
        "./importDesign",
        "./exportDesign",

        {
            "name": "Create Design",
            "icon": "icon-doe",
            "children": [
                "./create2LevelDesign",
                "./createRegularFrF2Design",
                "./createFullFactorialDesign",
                "./createOrthogonalArrayDesign",
                "./createDOptimalDesign",
                "./createCentralCompositeDesign",
                "./createBoxBehnkenDesign",
                "./createLatinHypercubeDesign",
                "./createTaguchiParameterDesign"
            ]
        },
        {
            "name": "Inspect Design",
            "icon": "icon-doe",
            "children": [
                "./inspectDesign",
                "./plotDesignGen",
                "./inspectFrF2DesignCatalog",
                "./inspectOrthogonalArrayDesignCatalog" 
            ]
        },
        {
            "name": "Modify Design",
            "icon": "icon-doe",
            "children": [
                "./addRemoveResp",
                "./AddCenterpoint2LevelDesign"						
            ]
        },
        {
            "name": "Analyze Design",
            "icon": "icon-doe",
            "children": [
                "./linearRegressionDoE",
                "./responseSurfaceModelFormula",
                "./mainEffectsIntractionPlotsGen", 
                "./effectsPlot2LevelFactor"
                
            ]
        }                                               

        
    ]

}

module.exports.nav = nav
