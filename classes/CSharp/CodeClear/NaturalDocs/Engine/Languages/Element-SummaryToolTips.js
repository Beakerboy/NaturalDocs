NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Languages.Element",{1841:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1841\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.</span>&#8203;Element</div></div></div><div class=\"TTSummary\">A class to hold an element found when parsing the code or comments.</div></div>",1843:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype1843\" class=\"NDPrototype NoParameterForm\"><div class=\"PPrePrototypeLine\"><span class=\"SHMetadata\">[Flags]</span></div><span class=\"SHKeyword\">public enum</span> Flags : <span class=\"SHKeyword\">byte</span></div></div>",1847:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1847\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Element (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">iterator,</td></tr><tr><td class=\"PType first\">Flags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1848:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1848\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Element (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">LineIterator&nbsp;</td><td class=\"PName last\">lineIterator,</td></tr><tr><td class=\"PType first\">Flags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1849:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1849\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Element (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">lineNumber,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">charNumber,</td></tr><tr><td class=\"PType first\">Flags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1851:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Topic Topic { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The Topic created by this element, or null if none.</div></div>",1852:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1852\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> List&lt;Link&gt; ClassParentLinks { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">A list of class parent Links created by this element, or null if none.</div></div>",1853:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1853\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> LineNumber { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The line number this element appears at.&nbsp; The first line number is one, not zero.</div></div>",1854:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1854\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> CharNumber { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The character number this element appears at.&nbsp; The first character number is one, not zero, and is relative to the line, not the file.</div></div>",1855:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1855\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Position Position { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The position the element appears at.</div></div>",1856:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1856\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> InComments { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether this element appears in the comments.&nbsp; It is possible for both InComments and InCode to be set.</div></div>",1857:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1857\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> InCode { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Whether this element appears in the code via full language support parsing.&nbsp; It is possible for both InCode and InComments to be set.</div></div>",1859:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1859\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Position position</div><div class=\"TTSummary\">The position the element appears at.</div></div>",1860:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1860\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Flags flags</div></div>",1861:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1861\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Topic topic</div><div class=\"TTSummary\">The Topic created by this element, or null if none.</div></div>",1862:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1862\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> List&lt;Link&gt; classParentLinks</div><div class=\"TTSummary\">A list of class parent Links created by this element, or null if none.</div></div>"});