NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Comments.Components.XMLIterator",{557:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype557\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Comments.&#8203;Components.</span>&#8203;XMLIterator</div></div></div><div class=\"TTSummary\">A struct to handle walking through XML-formatted content.&nbsp; It moves by element, treating things like tags and stretches of unformatted text as one step.&nbsp; The iterator assumes you are going to walk through it in a linear fashion rather than navigating a parsed XML tree.</div></div>",559:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype559\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> XMLIterator (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">end</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a new XML iterator that will navigate between the two TokenIterators.</div></div>",560:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype560\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Next (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">count&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">1</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves the iterator forward by the passed number of elements, returning whether it\'s still in bounds.</div></div>",561:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype561\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOn (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">XMLElementType&nbsp;</td><td class=\"PName last\">elementType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on the passed XMLElementType</div></div>",562:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype562\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOn (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">XMLElementType&nbsp;</td><td class=\"PName last\">elementType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">tagType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on the passed XMLElementType and tag type.&nbsp; This function must be used with XMLElementType.Tag since that the only type where tag type is revelant.  XMLElementType is passed anyway for consistency with other IsOn() functions.</div></div>",563:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype563\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOn (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">XMLElementType&nbsp;</td><td class=\"PName last\">elementType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">tagType,</td></tr><tr><td class=\"PType first\">TagForm&nbsp;</td><td class=\"PName last\">tagForm</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on the passed XMLElementType, tag type, and TagForm.&nbsp; This function must be used with XMLElementType.Tag since that\'s the only type where it\'s relevant.  XMLElementType is passed anyway for consistency with other IsOn() functions.</div></div>",564:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype564\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOnTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">tagType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on the passed XML tag type.</div></div>",565:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype565\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOnTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TagForm&nbsp;</td><td class=\"PName last\">tagForm</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on any XML tag of the passed TagForm.</div></div>",566:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype566\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> IsOnTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">tagType,</td></tr><tr><td class=\"PType first\">TagForm&nbsp;</td><td class=\"PName last\">tagForm</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the iterator is on the passed XML tag type and TagForm.</div></div>",567:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype567\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Dictionary&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">string</span>&gt; GetAllTagProperties ()</div><div class=\"TTSummary\">If Type is XMLElementType.Tag, this generates a dictionary of all the properties in the tag, if any.</div></div>",569:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype569\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private void</span> DetermineElement ()</div><div class=\"TTSummary\">Determines which XMLElementType the iterator is currently on, setting type and length.</div></div>",570:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype570\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private string</span> DecodePropertyValue (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">valueIndex,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">valueLength</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Extracts the property value from the passed XML value, stripping off the surrounding quotes and any escaped quotes within.</div></div>",572:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype572\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> XMLElementType Type { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The type of content the iterator is currently on.</div></div>",573:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype573\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> Length { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The length of the element the iterator is currently on.</div></div>",574:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype574\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> String { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the element as a string.</div></div>",575:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype575\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> TagType { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">If Type is XMLElementType.Tag, this is the tag type as a string.&nbsp; For example, &quot;&lt;br /&gt;&quot; would return &quot;br&quot;.&nbsp; It will always be in lowercase.</div></div>",576:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> TagForm TagForm { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">If Type is XMLElementType.Tag, this is the TagForm it takes.</div></div>",577:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype577\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> TagProperty (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">If Type is XMLElementType.Tag, return the value of the passed property, or null if it doesn\'t exist.&nbsp; The property name is case-insensitive.</div></div>",578:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype578\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public char</span> EntityValue { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">If Type is XMLElementType.EntityChar, this is the decoded character.</div></div>",579:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype579\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> Indent { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">If Type is XMLElementType.Indent, this is the indent length with tabs expanded.</div></div>",580:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype580\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> IsInBounds { <span class=\"SHKeyword\">get</span> }</div></div>",581:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype581\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> RawTextIndex { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The iterators position as an index into the string.</div></div>",582:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype582\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private string</span> RawText { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The raw text tokenIterator is walking over.</div></div>",584:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> TokenIterator tokenIterator</div><div class=\"TTSummary\">The current position of the iterator.</div></div>",585:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype585\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> endingRawTextIndex</div><div class=\"TTSummary\">The end of the text we are iterating over.</div></div>",586:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype586\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> XMLElementType type</div><div class=\"TTSummary\">The XMLElementType of the current element.</div></div>",587:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private string</span> tagType</div><div class=\"TTSummary\">The type of the current tag if the iterator is on a tag.</div></div>",588:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> length</div><div class=\"TTSummary\">The length of the current element.</div></div>",590:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static private char</span>[] AngleBrackets</div></div>",591:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static private char</span>[] StartOfElement</div></div>",592:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static private</span> Regex.Comments.XML.Tag TagRegex</div></div>",593:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype593\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static private</span> Regex.Comments.XML.TagProperty TagPropertyRegex</div></div>"});