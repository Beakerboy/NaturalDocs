NDContentPage.OnToolTipsLoaded({49:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype49\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A class to manage information about various aspects of the code and its documentation.</div></div>",123:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype123\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;IChangeWatcher</div></div></div><div class=\"TTSummary\">An interface for any class that wants to watch for changes in the code database.</div></div>",276:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype276\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;SafeDictionary&#8203;<span class=\"TemplateSignature\">&lt;KeyType, ValueType&gt;</span></div></div></div><div class=\"TTSummary\">A variation of .NET\'s Dictionary class that uses null returns instead of exceptions.</div></div>",1160:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Errors.</span>&#8203;ErrorList</div></div></div><div class=\"TTSummary\">A list of Error objects.</div></div>",1517:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1517\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;IDObjects.</span>&#8203;NumberSet</div></div></div><div class=\"TTSummary\">A class for efficiently storing a large list of ID numbers and determining which ones are still available.&nbsp; Also focuses on reusing deleted ID numbers rather than continuing on in autoincrement fashion.</div></div>",2035:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2035\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> IDObjects.NumberSet linksToResolve</div><div class=\"TTSummary\">The IDs of all the links that need to be resolved, either because they\'re new or their previous target was deleted.&nbsp; Note that this is not the complete set of all unresolved links; some links may have previously resolved to nothing and there may have been no changes made that could affect them.</div></div>",2036:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> SafeDictionary&lt;Symbols.EndingSymbol, IDObjects.NumberSet&gt; newTopicIDsByEndingSymbol</div><div class=\"TTSummary\">Keeps track of all newly created Topics.&nbsp; The keys are the Symbols.EndingSymbols the topics use, and the values are IDObjects.NumberSets of all the topic IDs associated with that ending symbol.&nbsp; This is used for resolving links.</div></div>",2037:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2037\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> beforeFirstResolve</div><div class=\"TTSummary\">Wheher we haven\'t called WorkOnResolvingLinks() yet this execution.</div></div>",2040:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2040\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WorkOnResolvingLinks (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Works on the task of resolving links due to topics changing or new links being added.&nbsp; This is a parallelizable task so multiple threads can call this function and the work will be divided up between them.</div></div>",3191:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3191\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;EndingSymbol</div></div></div><div class=\"TTSummary\">A struct encapsulating the ending symbol from a symbol string, which is a normalized way of representing the last part of a hierarchal code element or topic, such as &quot;functionc&quot; in &quot;PackageA.PackageB.FunctionC&quot;.&nbsp; Unlike SymbolStrings, ending symbols are case-insensitive.</div></div>",3611:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3611\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Topics.</span>&#8203;Topic</div></div></div><div class=\"TTSummary\">A class encapsulating all the information available about a topic.</div></div>",3865:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3865\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Module</div></div></div><div class=\"TTSummary\">A base class for a core part of Engine.Instance.</div></div>",3962:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3962\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Instance</div></div></div><div class=\"TTSummary\">A class for managing the overall Natural Docs engine.</div></div>"});