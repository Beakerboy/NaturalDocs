NDSummary.OnToolTipsLoaded("File2:ParsedPrototype.cs",{3820:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3820\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.</span>&#8203;ParsedPrototype</div></div></div><div class=\"TTSummary\">A class that wraps a Tokenizer for a prototype that\'s been marked with PrototypeParsingTypes, providing easier access to things like parameter lines.</div></div>",3822:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype3822\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> ParameterStyle : <span class=\"SHKeyword\">byte</span></div></div>",3825:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype3825\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public enum</span> SectionType : <span class=\"SHKeyword\">byte</span></div></div>",3832:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3832\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ParsedPrototype (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Tokenizer&nbsp;</td><td class=\"PName last\">prototype</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a new parsed prototype.</div></div>",3833:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3833\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetPrePrototypeLine (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">lineNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of a numbered pre-prototype line.&nbsp; Numbers start at zero.&nbsp; It will return false if one does not exist at that number.</div></div>",3834:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3834\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> GetCompletePrototype (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the complete prototype, minus whitespace.&nbsp; This does NOT include pre-prototype lines.</div></div>",3835:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3835\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Languages.AccessLevel GetAccessLevel ()</div><div class=\"TTSummary\">Returns the Languages.AccessLevel if it can be determined by the prototype.&nbsp; This should only be used with basic language support as it\'s not as reliable as the results from the dedicated language parsers.</div></div>",3836:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3836\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> GetBeforeParameters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the section of the prototype prior to the parameters.&nbsp; If it has parameters, it will include the starting symbol of the parameter list such as the opening parenthesis.&nbsp; If there are no parameters, this will return the bounds of the entire prototype.</div></div>",3837:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3837\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetParameter (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">parameterNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of a numbered parameter.&nbsp; Numbers start at zero.&nbsp; It will return false if one does not exist at that number.</div></div>",3838:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3838\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetParameterName (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the name of the passed parameter, or false if it couldn\'t find it.</div></div>",3839:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3839\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetFullParameterType (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">index,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">start,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">end,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">extraModifierStart,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">extraModifierEnd,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">prefixStart,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">prefixEnd,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">suffixStart,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">suffixEnd,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">impliedTypes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the type of the passed parameter, or false if it couldn\'t find it.&nbsp; This includes modifiers and type suffixes.&nbsp; Since the type token may not be continuous, it returns separate start and end iterators for extra type modifiers (&quot;const&quot; in &quot;const x: integer&quot;) prefixes (&quot;*&quot; in &quot;int *x&quot;) and suffixes (&quot;[12]&quot; in &quot;int x[12]&quot;).&nbsp; Regular modifiers attached to the type (&quot;unsigned&quot; in &quot;unsigned int x&quot;) will be accounted for by the main iterators.</div></div>",3840:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3840\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetBaseParameterType (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">index,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">start,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">end,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">impliedTypes&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the type of the passed parameter, or false if it couldn\'t find it.&nbsp; This excludes modifiers and type suffixes.</div></div>",3841:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3841\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetDefaultValue (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the default value of the passed parameter, or false if it doesn\'t exist.</div></div>",3842:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3842\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetAfterParameters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the section of the prototype after the parameters and whether it exists.&nbsp; If it does exist, the bounds will include the closing symbol of the parameter list such as the closing parenthesis.</div></div>",3843:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3843\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> GetPostPrototypeLine (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">lineNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of a numbered post-prototype line.&nbsp; Numbers start at zero.&nbsp; It will return false if one does not exist at that number.</div></div>",3844:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3844\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected void</span> CalculateSections ()</div></div>",3845:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3845\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> GetSectionBounds (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">SectionType&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">out</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the bounds of the passed section and whether it exists.&nbsp; An index of zero represents the first section of that type, 1 represents the second, etc.</div></div>",3846:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3846\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected</span> Section FindSection (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SectionType&nbsp;</td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">index&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the first section with the passed type, or if you passed an index, the nth section with that type.&nbsp; If there are none it will return null.</div></div>",3847:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3847\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected int</span> CountSections (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SectionType&nbsp;</td><td class=\"PName last\">type</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the number of sections with the passed type.</div></div>",3849:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3849\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Tokenizer Tokenizer { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The tokenized prototype.</div></div>",3850:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3850\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> NumberOfPrePrototypeLines { <span class=\"SHKeyword\">get</span> }</div></div>",3851:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> NumberOfParameters { <span class=\"SHKeyword\">get</span> }</div></div>",3852:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3852\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> NumberOfPostPrototypeLines { <span class=\"SHKeyword\">get</span> }</div></div>",3853:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3853\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> ParameterStyle Style { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The format of the prototype, such as C-style parameters (&quot;int x&quot;) or Pascal-style (&quot;x: int&quot;).&nbsp; If it has no parameters or no types this will return C.&nbsp; Tokens must be marked with PrototypeParsingType.Name, PrototypeParsingType.Type, and PrototypeParsingType.NameTypeSeparator for this to work.</div></div>",3855:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3855\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Tokenizer tokenizer</div><div class=\"TTSummary\">The Tokenizer containing the full prototype.</div></div>",3856:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3856\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;Section&gt; sections</div><div class=\"TTSummary\">A list of Sections representing chunks of the prototype, or null if it hasn\'t been calculated yet.</div></div>",3857:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3857\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> ParameterStyle? style</div><div class=\"TTSummary\">The prototype format, or null if it hasn\'t been determined yet.</div></div>",3858:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3858\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">protected</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;ParsedPrototype.</span>&#8203;Section</div></div></div></div>",3860:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3860\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Section ()</div></div>",3862:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3862\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> StartIndex</div></div>",3863:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3863\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> EndIndex</div></div>",3864:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3864\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SectionType Type</div></div>"});