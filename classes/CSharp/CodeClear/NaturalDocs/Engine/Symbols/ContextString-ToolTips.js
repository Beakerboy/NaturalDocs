NDContentPage.OnToolTipsLoaded({93:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype93\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CodeDB.</span>&#8203;IDLookupCache&#8203;<span class=\"TemplateSignature\">&lt;LookupType&gt;</span></div><div class=\"CPPostPrototypeLine\"><span class=\"SHKeyword\">where</span> LookupType: Collections.ILookupKey</div></div></div><div class=\"TTSummary\">A class that provides a local cache of string to ID mappings.&nbsp; The string class must implement Collections.ILookupKey.</div></div>",286:"<div class=\"NDToolTip TInterface LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype286\"><div class=\"CPEntry TInterface Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">interface</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;ILookupKey</div></div></div><div class=\"TTSummary\">An interface for any class that needs to be indexed with a specific key that differs from what\'s returned by ToString().</div></div>",3097:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3097\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;UsingString</div></div></div><div class=\"TTSummary\">A struct encapsulating a using string, which is a normalized way of representing a single &quot;using&quot; statement.</div></div>",3119:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype3119\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public const char</span> Level2</div><div class=\"TTSummary\">A character that can be used to separate strings which may contain Level1 characters.</div></div>",3120:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype3120\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public const char</span> Level3</div><div class=\"TTSummary\">A character that can be used to separate strings which may contain Level1 and Level2 characters.</div></div>",3124:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3124\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;SymbolString</div></div></div><div class=\"TTSummary\">A struct encapsulating a symbol string, which is a normalized way of representing a hierarchal code element or topic, such as &quot;PackageA.PackageB.FunctionC&quot;.</div></div>",3206:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3206\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;ContextString</div></div></div><div class=\"TTSummary\">A struct encapsulating a context string, which is a normalized way of representing what scope and &quot;using&quot; statements are active at a given point.</div></div>",3208:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype3208\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public const char</span> SeparatorChar</div><div class=\"TTSummary\">The character used to separate string components.</div></div>",3216:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3216\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetRawTextScope (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the bounds of the scope part of RawText.&nbsp; Returns true if there is a scope, false if it\'s global.&nbsp; This function is useful if you need to compare something to many ContextStrings and don\'t want to constantly create intermediate strings.</div></div>",3217:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3217\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetRawTextUsingStatement (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">statementIndex,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">rawTextIndex,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">rawTextLength</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the RawText bounds of the selected &quot;using&quot; statement.&nbsp; If there isn\'t a &quot;using&quot; statement for the passed index, it will return false.&nbsp; This function is useful if you need to compare something against many ContextStrings and don\'t want to constantly create intermediate strings and lists.</div></div>",3219:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3219\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SymbolString Scope { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The scope as a SymbolString, or null if global.</div></div>",3222:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3222\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> RawText { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the raw string for use with functions like GetRawTextScope() and GetRawTextUsingStatement().</div></div>"});