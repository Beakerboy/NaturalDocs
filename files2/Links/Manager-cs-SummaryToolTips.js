NDSummary.OnToolTipsLoaded("File2:Links/Manager.cs",{2030:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2030\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Links.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A module that manages scoring links.&nbsp; Links and their targets are still stored in CodeDB.Manager, but this handles the logic of determining how well each link and target match and generating scores for them.</div></div>",2031:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Manager (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Engine.</td><td class=\"PType\">Instance&nbsp;</td><td class=\"PName last\">engineInstance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2032:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2032\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Start (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ErrorList&nbsp;</td><td class=\"PName last\">errorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2033:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2033\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected override void</span> Dispose (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">strictRulesApply</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2035:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2035\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> IDObjects.NumberSet linksToResolve</div><div class=\"TTSummary\">The IDs of all the links that need to be resolved, either because they\'re new or their previous target was deleted.&nbsp; Note that this is not the complete set of all unresolved links; some links may have previously resolved to nothing and there may have been no changes made that could affect them.</div></div>",2036:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> SafeDictionary&lt;Symbols.EndingSymbol, IDObjects.NumberSet&gt; newTopicIDsByEndingSymbol</div><div class=\"TTSummary\">Keeps track of all newly created Topics.&nbsp; The keys are the Symbols.EndingSymbols the topics use, and the values are IDObjects.NumberSets of all the topic IDs associated with that ending symbol.&nbsp; This is used for resolving links.</div></div>",2037:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2037\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> beforeFirstResolve</div><div class=\"TTSummary\">Wheher we haven\'t called WorkOnResolvingLinks() yet this execution.</div></div>"});