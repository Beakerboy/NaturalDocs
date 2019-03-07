NDSummary.OnToolTipsLoaded("File2:Output/Components/HTMLTopicPage.cs",{2487:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2487\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public abstract</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Output.&#8203;Components.</span>&#8203;HTMLTopicPage</div></div></div><div class=\"TTSummary\">A base class for components that build a page of Topics for Output.Builders.HTML.</div></div>",2490:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2490\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> HTMLTopicPage (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Builders.</td><td class=\"PType\">HTML&nbsp;</td><td class=\"PName last\">htmlBuilder</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a new HTMLTopicPage object.</div></div>",2491:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2491\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Build (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">Accessor&nbsp;</td><td class=\"PName last\">accessor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the page and its supporting JSON files.&nbsp; Returns whether there was any content.&nbsp; It will also return false if it was interrupted by the CancelDelegate.</div></div>",2493:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2493\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> List&lt;Topic&gt; GetTopics (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">Accessor&nbsp;</td><td class=\"PName last\">accessor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the Topics for the page\'s location.</div></div>",2494:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2494\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> List&lt;Link&gt; GetLinks (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">CodeDB.</td><td class=\"PType\">Accessor&nbsp;</td><td class=\"PName last\">accessor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">CancelDelegate&nbsp;</td><td class=\"PName last\">cancelDelegate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Retrieves the Links appearing in the page\'s location.</div></div>",2495:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2495\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public abstract</span> HTMLTopicPage GetLinkTarget (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Topic&nbsp;</td><td class=\"PName last\">targetTopic</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a HTMLTopicPage for the target of a link which resolves to the passed Topic.</div></div>",2497:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2497\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Builders.HTML HTMLBuilder { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The Builders.HTML associated with this topic page.</div></div>",2498:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2498\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Engine.Instance EngineInstance { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The Engine.Instance associated with this topic page.</div></div>",2500:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2500\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public string</span> PageTitle { <span class=\"SHKeyword\">get</span> }</div></div>",2501:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype2501\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public abstract bool</span> IncludeClassInTopicHashPaths { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether to include the class in the topic part of hash paths.&nbsp; For example, you would want &quot;#Class:MyClass:Member&quot; instead of &quot;#Class:MyClass:MyClass.Member&quot;.&nbsp; However, you would want &quot;#File:&#8203;MyFile&#8203;.cs:MyClass&#8203;.Member&quot; instead of &quot;#File:&#8203;MyFile&#8203;.cs:Member&quot;.</div></div>",2502:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2502\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public</span> Path OutputFile { <span class=\"SHKeyword\">get</span> }</div></div>",2503:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2503\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public string</span> OutputFileHashPath { <span class=\"SHKeyword\">get</span> }</div></div>",2504:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2504\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public</span> Path ToolTipsFile { <span class=\"SHKeyword\">get</span> }</div></div>",2505:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2505\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public</span> Path SummaryFile { <span class=\"SHKeyword\">get</span> }</div></div>",2506:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype2506\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">abstract public</span> Path SummaryToolTipsFile { <span class=\"SHKeyword\">get</span> }</div></div>",2508:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype2508\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">protected</span> Builders.HTML htmlBuilder</div><div class=\"TTSummary\">The Builders.HTML associated with this object.</div></div>"});