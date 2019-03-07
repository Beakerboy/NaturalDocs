NDSummary.OnToolTipsLoaded("File2:Symbols/UsingString.cs",{3097:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3097\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Symbols.</span>&#8203;UsingString</div></div></div><div class=\"TTSummary\">A struct encapsulating a using string, which is a normalized way of representing a single &quot;using&quot; statement.</div></div>",3099:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype3099\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> UsingType : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">Which effectthe using statement has.</div></div>",3103:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype3103\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public const char</span> SeparatorChar</div><div class=\"TTSummary\">The character used to separate string components.</div></div>",3105:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3105\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private</span> UsingString (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">newUsingString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3106:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3106\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static public</span> UsingString FromParameters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UsingType&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">SymbolString&nbsp;</td><td class=\"PName\">prefixToAdd,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">SymbolString&nbsp;</td><td class=\"PName\">prefixToRemove&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">default</span>(SymbolString)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a UsingString from the passed parameters.</div></div>",3107:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static public</span> UsingString FromExportedString (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">exportedUsingString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a UsingString from the passed string which originally came from another UsingString object.&nbsp; This assumes the string is already be in the proper format.&nbsp; Only use this when retrieving UsingStrings that were stored as plain text in a database or other data file.</div></div>",3109:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3109\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static implicit operator string</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UsingString&nbsp;</td><td class=\"PName last\">usingString</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">A cast operator to covert the using string to a string.</div></div>",3111:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3111\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SymbolString PrefixToAdd { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The SymbolString to add to the beginning of the symbol.&nbsp; This is applicable to both UsingType.AddPrefix and UsingType.ReplacePrefix.</div></div>",3112:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3112\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SymbolString PrefixToRemove { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The SymbolString to remove from the beginning of the symbol.&nbsp; This is only applicable with UsingType.ReplacePrefix.</div></div>",3113:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3113\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> UsingType Type { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Which effect the using statement has.</div></div>",3115:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3115\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private string</span> usingString</div><div class=\"TTSummary\">The combined using string.</div></div>"});