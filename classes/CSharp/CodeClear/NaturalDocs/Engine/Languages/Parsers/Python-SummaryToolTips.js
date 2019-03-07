NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Languages.Parsers.Python",{1586:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1586\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Languages.&#8203;Parsers.</span>&#8203;Python</div></div></div><div class=\"TTSummary\">Additional language support for Python.</div></div>",1588:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1588\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Python (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">Languages.</td><td class=\"PType\">Manager&nbsp;</td><td class=\"PName last\">manager</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1589:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1589\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">override public</span> ParsedClassPrototype ParseClassPrototype (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">stringPrototype,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">commentTypeID</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a raw text prototype into a ParsedClassPrototype.&nbsp; Will return null if it is not an appropriate prototype.</div></div>",1591:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1591\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipClassDeclarationLine (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">iterator,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ParseMode&nbsp;</td><td class=\"PName\">mode&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ParseMode.IterateOnly</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">If the iterator is on a class\'s declaration line, moves it past it and returns true.&nbsp; It does not handle the class body.</div></div>",1592:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1592\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipDecorators (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">iterator,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ParseMode&nbsp;</td><td class=\"PName\">mode&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ParseMode.ParseClassPrototype</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tries to move the iterator past a group of decorators.</div></div>",1593:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1593\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipDecorator (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">iterator,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ParseMode&nbsp;</td><td class=\"PName\">mode&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ParseMode.IterateOnly</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tries to move the iterator past a single decorator.&nbsp; Note that there may be more than one decorator in a row, so use TryToSkipDecorators() if you need to move past all of them.</div></div>",1594:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1594\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipClassParent (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName\">iterator,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ParseMode&nbsp;</td><td class=\"PName\">mode&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ParseMode.IterateOnly</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tries to move the iterator past a single class parent declaration.</div></div>",1595:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1595\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipIdentifier (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">iterator</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tries to move the iterator past a qualified identifier, such as &quot;X.Y.Z&quot;.&nbsp; Use TryToSkipUnqualifiedIdentifier() if you only want to skip a single segment.</div></div>",1596:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1596\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected bool</span> TryToSkipUnqualifiedIdentifier (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">ref</span>&nbsp;</td><td class=\"PType\">TokenIterator&nbsp;</td><td class=\"PName last\">iterator</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Tries to move the iterator past a single unqualified identifier, which means only &quot;X&quot; in &quot;X.Y.Z&quot;.</div></div>"});