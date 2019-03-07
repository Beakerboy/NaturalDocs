NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Output.Manager",{2872:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2872\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Output.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A class to manage all the output builders.</div></div>",2874:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2874\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Manager (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Engine.</td><td class=\"PType\">Instance&nbsp;</td><td class=\"PName last\">engineInstance</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2875:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2875\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">override protected void</span> Dispose (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">strictRulesApply</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",2876:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2876\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AddBuilder (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Builder&nbsp;</td><td class=\"PName last\">builder</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds an Output.Builder to the list.&nbsp; This can only be called before the class is started.</div></div>",2877:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2877\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Start (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ErrorList&nbsp;</td><td class=\"PName last\">errorList</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the manager and returns whether all the settings are correct and that execution is ready to begin.&nbsp; If there are problems they are added as Errors to the errorList parameter.&nbsp; This class is <b>not</b> designed to allow multiple attempts.&nbsp; If this function fails scrap the entire Engine.Instance and start again.</div></div>",2878:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2878\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WorkOnUpdatingOutput (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Works on the task of updating the output files for any changes it has detected so far.&nbsp; This is a parallelizable task, so multiple threads can call this function and the work will be divided up between them.&nbsp; Note that the output may not be usable after this completes; you also need to call WorkOnFinalizingOutput().</div></div>",2879:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2879\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WorkOnFinalizingOutput (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Works on the task of finalizing the output, which is any task that requires all files to be successfully processed by WorkOnUpdatingOutput() before it can run.&nbsp; You must wait for all threads to return from WorkOnUpdatingOutput() before calling this function.&nbsp; Examples of finalization include generating index and search data for HTML output and compiling the temporary files into the final one for PDF output.&nbsp; This is a parallelizable task, so multiple threads can call this function and the work will be divided up between them.</div></div>",2880:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2880\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Cleanup (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Cleans up the module\'s internal data when everything is up to date.&nbsp; This will do things like remove empty output folders.&nbsp; You can pass a CancelDelegate to interrupt the process if necessary.</div></div>",2881:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2881\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public long</span> UnitsOfWorkRemaining ()</div><div class=\"TTSummary\">Returns a number representing how much work the builders have left to do.&nbsp; What tasks the units represent can vary, so this is intended simply to allow a percentage to be calculated.</div></div>",2883:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2883\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> IList&lt;Builder&gt; Builders { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">A read-only list of Builders managed by this module.&nbsp; If there are none, the list will be empty instead of null.</div></div>",2884:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2884\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> ReparseStyleFiles { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">If set to true, it will force reparsing of all files associated with styles.&nbsp; Use this when adding a new style to a builder, since if another builder already used that style they will not be parsed again otherwise.&nbsp; You can only set this to true, you cannot set it back to false.</div></div>",2886:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2886\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;Builder&gt; builders</div></div>",2887:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2887\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span> reparseStyleFiles</div></div>"});