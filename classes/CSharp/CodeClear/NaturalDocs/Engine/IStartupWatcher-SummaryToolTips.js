NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.IStartupWatcher",{3949:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3949\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;IStartupWatcher</div></div></div><div class=\"TTSummary\">An interface for any class that wants to watch events that occur during initialization.</div></div>",3951:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3951\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> OnStartPossiblyLongOperation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">operationName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called whenever an operation is starting that <b>might</b> take a long time.&nbsp; In some cases it will be over instantaneously, in others it could cause a significant, user-noticeable delay.&nbsp; The operation name will be one of the following, but you must design the watcher code for any possibility because future versions may add new operation names:</div></div>",3952:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3952\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> OnEndPossiblyLongOperation ()</div><div class=\"TTSummary\">Called when the last operation specified with OnStartPossiblyLongOperation() ends.</div></div>"});