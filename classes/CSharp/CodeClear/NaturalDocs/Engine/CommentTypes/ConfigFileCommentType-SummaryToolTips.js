NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.CommentTypes.ConfigFileCommentType",{392:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype392\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;CommentTypes.</span>&#8203;ConfigFileCommentType</div></div></div><div class=\"TTSummary\">A class encapsulating information about a comment type as parsed from a ConfigFile.&nbsp; This differs from CommentType in that its meant to represent how its entry appears in the config file rather than the final combined settings.&nbsp; For example, any field can be null if it\'s not defined.</div></div>",394:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype394\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ConfigFileCommentType (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">newName,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">newAlterType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">newLineNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",395:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype395\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> FixNameCapitalization (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">newName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Replaces Name with a version with alternate capitalization but is otherwise equal.</div></div>",397:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> Name { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The name of the comment type, not to be confused with DisplayName.</div></div>",398:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype398\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> AlterType { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether this comment is altering an existing one or not.</div></div>",399:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype399\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> LineNumber { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The line number where this comment type appears in the file.</div></div>",400:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype400\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> DisplayName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s display name, or null if it\'s not defined.&nbsp; If this is set to something other than null, DisplayNameFromLocale becomes null.</div></div>",401:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype401\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> DisplayNameFromLocale { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s display name identifier to be retrieved from Engine.Locale, or null if it\'s not defined.&nbsp; If this is set to something other than null, DisplayName becomes null.</div></div>",402:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype402\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> PluralDisplayName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s plural display name, or null if it\'s not defined.&nbsp; If this is set to something other than null, PluralDisplayNameFromLocale becomes null.</div></div>",403:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype403\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> PluralDisplayNameFromLocale { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s plural display name identifier to be retrieved from Engine.Locale, or null if it\'s not defined.&nbsp; If this is set to something other than null, PluralDisplayName becomes null.</div></div>",404:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype404\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> SimpleIdentifier { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The comment type\'s name using only the letters A to Z, or null if it\'s not defined.</div></div>",405:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype405\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentType.IndexValue? Index { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether the comment type is indexed, or null if it is not defined.&nbsp; If set to IndexWith, you must also set the IndexWith property.</div></div>",406:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype406\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> IndexWith { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">A string representing the name of the comment type this one is indexed with, provided Index is set to IndexWith.&nbsp; Will be null otherwise.</div></div>",407:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype407\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentType.ScopeValue? Scope { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The scope of the comment type, or null if it is not defined.</div></div>",408:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype408\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span>? BreakLists { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether list comments should be broken into individual topics in the output, or null if it is not defined.</div></div>",409:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype409\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> List&lt;<span class=\"SHKeyword\">string</span>&gt; Keywords { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">An array of keywords this comment type defines.&nbsp; It will never be null.&nbsp; The array\'s values are arranged in pairs, with odd ones being the singular form and even ones being the plural.&nbsp; If there is no plural form for a keyword, it\'s even entry will be null.</div></div>",410:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype410\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentTypeFlags Flags</div><div class=\"TTSummary\">CommentTypeFlags as a public variable, so you can use it like a property.</div></div>",412:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype412\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> name</div><div class=\"TTSummary\">The comment type name.</div></div>",413:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype413\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span> alterType</div><div class=\"TTSummary\">Whether this entry is for altering a comment type instead of defining a new one.</div></div>",414:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype414\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected int</span> lineNumber</div><div class=\"TTSummary\">The line number where this comment type appears in the file.</div></div>",415:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype415\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> displayName</div><div class=\"TTSummary\">The comment type\'s display name, or null if it\'s not defined.</div></div>",416:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype416\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> displayNameFromLocale</div><div class=\"TTSummary\">The locale identifier of the comment type\'s display name, or null if it\'s not defined.</div></div>",417:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype417\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> pluralDisplayName</div><div class=\"TTSummary\">The comment type\'s plural display name, or null if it\'s not defined.</div></div>",418:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype418\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> pluralDisplayNameFromLocale</div><div class=\"TTSummary\">The locale identifier of the comment type\'s plural display name, or null if it\'s not defined.</div></div>",419:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype419\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> simpleIdentifier</div><div class=\"TTSummary\">The comment type\'s name using only the letters A to Z, or null if it\'s not defined.</div></div>",420:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype420\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> CommentType.IndexValue? index</div><div class=\"TTSummary\">Whether the comment type is indexed, or null if it is not defined.</div></div>",421:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype421\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected string</span> indexWith</div><div class=\"TTSummary\">The name of the comment type to index this one with, or null if none.</div></div>",422:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype422\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> CommentType.ScopeValue? scope</div><div class=\"TTSummary\">The scope of the comment type, or null if it is not defined.</div></div>",423:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype423\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span>? classHierarchy</div><div class=\"TTSummary\">Whether the comment type can be included in the class hierarchy, or null if it is not defined.</div></div>",424:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype424\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span>? variableType</div><div class=\"TTSummary\">Whether the comment type can be used as a variable type, or null if it is not defined.</div></div>",425:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype425\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected bool</span>? breakLists</div><div class=\"TTSummary\">Whether lists comments should be broken into individual topics, or null if it is not defined.</div></div>",426:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype426\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;<span class=\"SHKeyword\">string</span>&gt; keywords</div><div class=\"TTSummary\">An array of keyword pairs.&nbsp; Odd indexes are singular forms, even are plural.&nbsp; An even entry will be null if a plural form is not defined.&nbsp; The variable itself will never be null.</div></div>"});