NDSummary.OnToolTipsLoaded("File2:CommentTypes/CommentType.cs",{505:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype505\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CommentTypes.</span>&#8203;CommentType</div></div></div><div class=\"TTSummary\">A class encapsulating information about a comment type.&nbsp; This differs from ConfigFileCommentType in that its meant to represent the final combined settings of a comment type rather than its entry in a config file.&nbsp; For example, all fields are initialized to default values rather than null or Default, and it doesn\'t store the type\'s keywords.</div></div>",507:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype507\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> ScopeValue : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">Can be Normal, Start, End, or AlwaysGlobal.</div></div>",508:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype508\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> IndexValue : <span class=\"SHKeyword\">byte</span></div><div class=\"TTSummary\">Can be Yes, No, or IndexWith.</div></div>",510:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype510\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> CommentType (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">newName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",512:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype512\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">override public string</span> Name { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The name of the comment type, not to be confused with DisplayName.</div></div>",513:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype513\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> DisplayName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s display name.</div></div>",514:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype514\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> PluralDisplayName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s plural display name.</div></div>",515:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> SimpleIdentifier { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s name using only the letters A to Z.</div></div>",516:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype516\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> IndexValue Index { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether the comment type is indexed.&nbsp; If set to IndexWith, you must also set the IndexWith property.</div></div>",517:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> IndexWith { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The ID of the comment type this one is indexed with, provided Index is set to IndexWith.&nbsp; Will be zero otherwise.</div></div>",518:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype518\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> ScopeValue Scope { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The scope of the comment type.</div></div>",519:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> BreakLists { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether list comments should be broken into individual topics in the output.</div></div>",520:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype520\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentTypeFlags Flags</div><div class=\"TTSummary\">CommentTypeFlags as a public variable, so you can use it like a property.</div></div>",522:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype522\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> == (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CommentType&nbsp;</td><td class=\"PName last\">type1,</td></tr><tr><td class=\"PType first\">CommentType&nbsp;</td><td class=\"PName last\">type2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether all the properties of the two comment types are equal, including Name and ID, but excluding CommentTypeFlags.Location Properties.</div></div>",523:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype523\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span> != (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CommentType&nbsp;</td><td class=\"PName last\">type1,</td></tr><tr><td class=\"PType first\">CommentType&nbsp;</td><td class=\"PName last\">type2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns if any of the properties of the two comment types are inequal, including Name and ID, but excluding CommentTypeFlags.Location Properties.</div></div>",525:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype525\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> Equals (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">o</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",526:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype526\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public override int</span> GetHashCode ()</div></div>",528:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype528\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> name</div><div class=\"TTSummary\">The comment type name.</div></div>",529:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype529\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> displayName</div><div class=\"TTSummary\">The comment type\'s display name.&nbsp; May be null to indicate that it was not set.&nbsp; DisplayName will always return a value though.</div></div>",530:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype530\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> pluralDisplayName</div><div class=\"TTSummary\">The comment type\'s plural display name.&nbsp; May be null to indicate that it was not set.&nbsp; PluralDisplayName will always return a value though.</div></div>",531:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype531\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> simpleIdentifier</div><div class=\"TTSummary\">The comment type\'s name using only the letters A to Z.&nbsp; No spaces, numbers, symbols, or Unicode.&nbsp; May be null to indicate that it was not set.&nbsp; SimpleIdentifier will always return a value though.</div></div>",532:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> IndexValue index</div><div class=\"TTSummary\">Whether the comment type is indexed.</div></div>",533:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype533\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected int</span> indexWith</div><div class=\"TTSummary\">The ID of the comment type to index this one with, or zero if none.</div></div>",534:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype534\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> ScopeValue scope</div><div class=\"TTSummary\">The scope of the comment type.</div></div>",535:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype535\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span> breakLists</div><div class=\"TTSummary\">Whether lists comments should be broken into individual topics.</div></div>"});