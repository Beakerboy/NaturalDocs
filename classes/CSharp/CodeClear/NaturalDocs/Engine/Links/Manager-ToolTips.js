NDContentPage.OnToolTipsLoaded({49:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype49\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;Manager</div></div></div><div class=\"TTSummary\">A class to manage information about various aspects of the code and its documentation.</div></div>",123:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype123\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;IChangeWatcher</div></div></div><div class=\"TTSummary\">An interface for any class that wants to watch for changes in the code database.</div></div>",134:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype134\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;EventAccessor</div></div></div><div class=\"TTSummary\">A variation of Accessor that is passed along with change events.&nbsp; This is necessary because the code handling the events may need to query the database for more information, and this exposes only the small subset of functions that should be allowed then.</div></div>",145:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype145\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;Accessor</div></div></div><div class=\"TTSummary\">A class threads can use to access the code database.</div></div>",276:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype276\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;SafeDictionary&#8203;<span class=\"TemplateSignature\">&lt;KeyType, ValueType&gt;</span></div></div></div><div class=\"TTSummary\">A variation of .NET\'s Dictionary class that uses null returns instead of exceptions.</div></div>",1160:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1160\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Errors.</span>&#8203;ErrorList</div></div></div><div class=\"TTSummary\">A list of Error objects.</div></div>",1517:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1517\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;IDObjects.</span>&#8203;NumberSet</div></div></div><div class=\"TTSummary\">A class for efficiently storing a large list of ID numbers and determining which ones are still available.&nbsp; Also focuses on reusing deleted ID numbers rather than continuing on in autoincrement fashion.</div></div>",2035:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2035\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> IDObjects.NumberSet linksToResolve</div><div class=\"TTSummary\">The IDs of all the links that need to be resolved, either because they\'re new or their previous target was deleted.&nbsp; Note that this is not the complete set of all unresolved links; some links may have previously resolved to nothing and there may have been no changes made that could affect them.</div></div>",2036:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> SafeDictionary&lt;Symbols.EndingSymbol, IDObjects.NumberSet&gt; newTopicIDsByEndingSymbol</div><div class=\"TTSummary\">Keeps track of all newly created Topics.&nbsp; The keys are the Symbols.EndingSymbols the topics use, and the values are IDObjects.NumberSets of all the topic IDs associated with that ending symbol.&nbsp; This is used for resolving links.</div></div>",2037:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2037\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> beforeFirstResolve</div><div class=\"TTSummary\">Wheher we haven\'t called WorkOnResolvingLinks() yet this execution.</div></div>",2040:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2040\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WorkOnResolvingLinks (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Works on the task of resolving links due to topics changing or new links being added.&nbsp; This is a parallelizable task so multiple threads can call this function and the work will be divided up between them.</div></div>",2058:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2058\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public long</span> Score (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Link&nbsp;</td><td class=\"PName\">link,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Topic&nbsp;</td><td class=\"PName\">topic,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName\">minimumScore&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\">List&lt;LinkInterpretation&gt;&nbsp;</td><td class=\"PName\">interpretations&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Generates a numeric score representing how well the Topic serves as a match for the Link.&nbsp; Higher scores are better, and zero means they don\'t match at all.</div></div>",2059:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2059\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private long</span> ScoreInterpretation (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Topic&nbsp;</td><td class=\"PName last\">topic,</td></tr><tr><td class=\"PType first\">Link&nbsp;</td><td class=\"PName last\">link,</td></tr><tr><td class=\"PType first\">SymbolString&nbsp;</td><td class=\"PName last\">interpretation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A function used by Score() to determine the C and S fields of the score for the passed interpretation.&nbsp; Only those fields and the trailing 1 will be set in the returned score.&nbsp; If the interpretation doesn\'t match, it will return zero.</div></div>",2080:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2080\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Links.</span>&#8203;LinkInterpretation</div></div></div><div class=\"TTSummary\">A class representing a possible interpretation of a Natural Docs link in &lt;NDMarkup&gt;.</div></div>",2104:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2104\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Links.</span>&#8203;Link</div></div></div><div class=\"TTSummary\">A class encapsulating all the information available about a link.</div></div>",2148:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2148\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Links.</span>&#8203;ImageLink</div></div></div><div class=\"TTSummary\">A class encapsulating all the information available about an image link, like &quot;(see image.jpg)&quot;.</div></div>",3124:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3124\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;SymbolString</div></div></div><div class=\"TTSummary\">A struct encapsulating a symbol string, which is a normalized way of representing a hierarchal code element or topic, such as &quot;PackageA.PackageB.FunctionC&quot;.</div></div>",3157:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3157\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;ParameterString</div></div></div><div class=\"TTSummary\">A struct encapsulating parameters from a symbol, which is a normalized way of representing the parenthetical section of a code element or topic, such as &quot;(int, int)&quot; in &quot;PackageA.PackageB.FunctionC(int, int)&quot;.&nbsp; It supports alternate braces as well such as &quot;this[int]&quot; and &quot;Template&lt;T&gt;&quot;.&nbsp; When generated from prototypes, ParameterStrings only store the types of each parameter, not the names or default values.</div></div>",3191:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3191\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;EndingSymbol</div></div></div><div class=\"TTSummary\">A struct encapsulating the ending symbol from a symbol string, which is a normalized way of representing the last part of a hierarchal code element or topic, such as &quot;functionc&quot; in &quot;PackageA.PackageB.FunctionC&quot;.&nbsp; Unlike SymbolStrings, ending symbols are case-insensitive.</div></div>",3234:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3234\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;ClassString</div></div></div><div class=\"TTSummary\">A struct encapsulating a class string, which is a normalized way of representing what class a given topic is in.&nbsp; This also covers databases and any other hierarchy that uses a class ID.</div></div>",3611:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3611\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Topics.</span>&#8203;Topic</div></div></div><div class=\"TTSummary\">A class encapsulating all the information available about a topic.</div></div>",3617:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype3617\" class=\"NDPrototype NoParameterForm\"><div class=\"PPrePrototypeLine\"><span class=\"SHMetadata\">[Flags]</span></div><span class=\"SHKeyword\">public enum</span> ChangeFlags : <span class=\"SHKeyword\">uint</span></div><div class=\"TTSummary\">A bitfield that represents all the properties that were changed.&nbsp; Note that this only applies when DatabaseCompareResult.Similar_WontAffectLinking is returned.&nbsp; However, to prevent coding mistakes, all fields will be set to true when DatabaseCompareResult.Different is returned.</div></div>",3670:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3670\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> DefinesClass { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether this topic defines its ClassString as opposed to just being a member.</div></div>",3820:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3820\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;ParsedPrototype</div></div></div><div class=\"TTSummary\">A class that wraps a Tokenizer for a prototype that\'s been marked with PrototypeParsingTypes, providing easier access to things like parameter lines.</div></div>",3865:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3865\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Module</div></div></div><div class=\"TTSummary\">A base class for a core part of Engine.Instance.</div></div>",3962:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3962\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;Instance</div></div></div><div class=\"TTSummary\">A class for managing the overall Natural Docs engine.</div></div>",4009:"<div class=\"NDToolTip TDelegate LCSharp\"><div id=\"NDPrototype4009\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public delegate bool</span> CancelDelegate ()</div><div class=\"TTSummary\">A delegate that returns a bool of whether to cancel an operation or not.</div></div>"});