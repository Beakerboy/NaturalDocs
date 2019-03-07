NDSummary.OnToolTipsLoaded("File2:Collections/TagStack.cs",{203:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype203\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.</span>&#8203;TagStack</div></div></div><div class=\"TTSummary\">A class to handle tag systems like HTML and XML that might not be valid.&nbsp; This stack tracks tags that are opened and allows you to handle tags that are closed out of order or not closed at all.</div></div>",205:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype205\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> TagStack ()</div></div>",206:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype206\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> OpenTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">tag,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">appendOnClose&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds an opening tag to the stack.&nbsp; If you are using the stack to convert between two tag systems, you can also include text to be automatically appended when the tag closes.</div></div>",207:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype207\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> CloseTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">tag,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">StringBuilder&nbsp;</td><td class=\"PName\">appendClosedTagsTo&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Closes a tag that was added to the stack.&nbsp; If a StringBuilder is passed, the appendOnClose text for every tag closed will be appended to it in order.&nbsp; Any nested tags will be closed automatically to handle invalid markup such as &quot;&lt;i&gt;text&lt;b&gt;text&lt;/i&gt;&quot;.&nbsp; If the passed tag doesn\'t appear on the stack this will have no effect.</div></div>",208:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype208\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> CloseTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">index,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">StringBuilder&nbsp;</td><td class=\"PName\">appendClosedTagsTo&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Closes the tag at the passed index.&nbsp; If a StringBuilder is passed, the appendOnClose text for every tag closed will be appended to it in order.&nbsp; Any nested tags will be closed automatically to handle invalid markup such as &quot;&lt;i&gt;text&lt;b&gt;text&lt;/i&gt;&quot;.</div></div>",209:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype209\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> CloseAllTags (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">StringBuilder&nbsp;</td><td class=\"PName\">appendClosedTagsTo&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Closes any open tags left on the stack.&nbsp; If a StringBuilder is passed, the appendOnClose text for every tag closed will be appended to it in order.</div></div>",210:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype210\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> FindTag (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">tag</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the index of the last (innermost) matching tag on the stack, or -1 if it isn\'t present.</div></div>",212:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype212\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> Count { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The number of open tags on the stack.</div></div>",213:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype213\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> IsEmpty { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether there are any open tags on the stack.</div></div>",214:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype214\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string this</span> [</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">] { <span class=\"SHKeyword\">get</span> }</td></tr></table></div><div class=\"TTSummary\">An index operator to retrieve individual tags in the stack.</div></div>",216:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype216\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> List&lt;Entry&gt; stack</div><div class=\"TTSummary\">The tag stack implemented as a list since we need to be able to look through the members for closing tags.</div></div>",218:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype218\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">private</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Collections.&#8203;TagStack.</span>&#8203;Entry</div></div></div></div>",220:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype220\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> Tag</div></div>",221:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype221\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> AppendOnClose</div></div>"});