NDSummary.OnToolTipsLoaded("CSharpClass:CodeClear.NaturalDocs.Engine.Tokenization.TokenIterator",{3415:"<div class=\"NDToolTip TStruct LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3415\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span> <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">CodeClear.&#8203;NaturalDocs.&#8203;Engine.&#8203;Tokenization.</span>&#8203;TokenIterator</div></div></div><div class=\"TTSummary\">An iterator for efficiently walking through the tokens in Tokenizer while keeping track of the line number and offset into the raw text.</div></div>",3417:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3417\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Next (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">count&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">1</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves forward the passed number of tokens, returning false if we\'re past the last token.&nbsp; You can use this with negative numbers to move backwards.</div></div>",3418:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3418\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> NextByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves forward by the passed number of characters, returning false if we\'re past the last token.&nbsp; You can use this with negative numbers to move backwards.</div></div>",3419:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3419\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> NextPastWhitespace ()</div><div class=\"TTSummary\">Moves forward until past all whitespace tokens.</div></div>",3420:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3420\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> NextPastWhitespace (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">limit</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves forward until past all whitespace tokens or the limit is reached.</div></div>",3421:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3421\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> Previous (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName\">count&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">1</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves backwards the passed number of tokens, returning false if we\'re past the first token.&nbsp; You can use this with negative numbers to move forward.</div></div>",3422:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3422\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> PreviousByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves backwards by the passed number of characters, returning false if we\'re past the first token.&nbsp; You can use this with negative numbers to move forward.</div></div>",3423:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3423\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> PreviousPastWhitespace (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PreviousPastWhitespaceMode&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves backwards until past all whitespace tokens.</div></div>",3424:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3424\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> PreviousPastWhitespace (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PreviousPastWhitespaceMode&nbsp;</td><td class=\"PName last\">mode,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">limit</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Moves backwards until past all whitespace tokens or it reaches the limit.</div></div>",3425:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3425\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> TokensInCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characterCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the number of tokens between the current position and the passed number of characters.&nbsp; If advancing by the character count would not land on a token boundary this returns -1.</div></div>",3426:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3426\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> TokensInPreviousCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characterCount</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns the number of tokens between the current position and the passed number of characters before it.&nbsp; If going backwards by the character count would not land on a token boundary this returns -1.</div></div>",3427:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3427\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> MatchesToken (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">text,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the passed string matches the current token.&nbsp; The string must match the entire token, so &quot;some&quot; won\'t match &quot;something&quot;.&nbsp; Returns false if the iterator is out of bounds.</div></div>",3428:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3428\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> Match MatchesToken (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">System.Text.RegularExpressions.</td><td class=\"PType\">Regex&nbsp;</td><td class=\"PName last\">regex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a regular expression to the token and returns the Match object as if Regex.Match() was called.&nbsp; If the iterator is out of bounds it will be applied to an empty string.</div></div>",3429:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3429\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> MatchesToken (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName\">other,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the current token matches the one at the passed iterator.&nbsp; Returns false if either iterator is out of bounds.</div></div>",3430:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3430\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> MatchesToken (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SimpleTokenIterator&nbsp;</td><td class=\"PName\">other,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the current token matches the one at the passed iterator.&nbsp; Returns false if either iterator is out of bounds.</div></div>",3431:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3431\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> MatchesAcrossTokens (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">text,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns whether the passed string matches the tokens at the current position.&nbsp; The string comparison can span multiple tokens, which allows you to test against things like &quot;//&quot; which would be two tokens.&nbsp; However, the string must still match complete tokens so &quot;// some&quot; won\'t match &quot;// something&quot;.&nbsp; Returns false if the iterator is out of bounds.</div></div>",3432:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3432\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> MatchesAnyToken (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName\">text,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Determines whether any of the passed strings match the token at the current position, returning the match\'s array index if true or -1 if not.</div></div>",3433:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3433\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> MatchesAnyAcrossTokens (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName\">text,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Determines whether any of the passed strings match the tokens at the current position, returning the match\'s array index if true or -1 if not.&nbsp; The string comparison can span multiple tokens, which allows you to test against things like &quot;//&quot; which would be two tokens.&nbsp; However, the string must still match complete tokens so &quot;// some&quot; won\'t match &quot;// something&quot;.</div></div>",3434:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3434\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public int</span> MatchesAnyPairAcrossTokens (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">IList&lt;<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName\">text,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">ignoreCase&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Determines whether any of the passed string pairs match the tokens at the current position, returning the match\'s array index if true or -1 if not.&nbsp; Only the first of each pair are tested against the current position.&nbsp; The string comparison can span multiple tokens, which allows you to test against things like &quot;/<b>&quot; which would be two tokens.&nbsp; However, the string must still match complete tokens so &quot;/</b> some&quot; won\'t match &quot;/* something&quot;.</div></div>",3435:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3435\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> AppendTokenTo (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">System.Text.</td><td class=\"PType\">StringBuilder&nbsp;</td><td class=\"PName last\">output</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Appends the token to the passed StringBuilder.&nbsp; This is more efficient than appending the result of String because it copies directly from the source without creating an intermediate string.</div></div>",3436:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3436\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetCommentParsingTypeByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">CommentParsingType&nbsp;</td><td class=\"PName last\">newType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the CommentParsingType of the tokens encompassed by the passed number of characters.</div></div>",3437:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3437\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetSyntaxHighlightingTypeByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SyntaxHighlightingType&nbsp;</td><td class=\"PName last\">newType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the SyntaxHighlightingType of the tokens encompassed by the passed number of characters.</div></div>",3438:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3438\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetPrototypeParsingTypeByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PrototypeParsingType&nbsp;</td><td class=\"PName last\">newType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the PrototypeParsingType of the tokens encompassed by the passed number of characters.</div></div>",3439:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3439\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> SetClassPrototypeParsingTypeByCharacters (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ClassPrototypeParsingType&nbsp;</td><td class=\"PName last\">newType,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">characters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the ClassPrototypeParsingType of the tokens encompassed by the passed number of characters.</div></div>",3441:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3441\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal</span> TokenIterator (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Tokenizer&nbsp;</td><td class=\"PName last\">newTokenizer,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">newTokenIndex,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">newRawTextIndex,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">newLineNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a new iterator with the passed variables.</div></div>",3443:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3443\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> String { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Returns the token as a string, or an empty string if it\'s out of bounds.&nbsp; Note that this allocates memory and creates a copy of the string.&nbsp; Whenever possible use functions like MatchesToken() and AppendTokenTo() to work directly on the original memory, or use RawTextIndex and RawTextLength with Tokenizer.RawText to access it yourself.</div></div>",3444:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3444\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public char</span> Character { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The first character of the token, or null if it\'s out of bounds.&nbsp; This is useful for symbol tokens which will always be only one character long.</div></div>",3445:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3445\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> FundamentalType FundamentalType { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The FundamentalType of the current token, or FundamentalType.Null if the iterator is out of bounds.&nbsp; It cannot be changed.</div></div>",3446:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3446\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> CommentParsingType CommentParsingType { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The CommentParsingType of the current token, or CommentParsingType.Null if it hasn\'t been set or the iterator is out of bounds.</div></div>",3447:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3447\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> SyntaxHighlightingType SyntaxHighlightingType { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The SyntaxHighlightingType of the current token, or SyntaxHighlightingType.Null if it hasn\'t been set or the iterator is out of bounds.</div></div>",3448:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3448\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> PrototypeParsingType PrototypeParsingType { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The PrototypeParsingType of the current token, or PrototypeParsingType.Null if it hasn\'t been set or the iterator is out of bounds.</div></div>",3449:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3449\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> ClassPrototypeParsingType ClassPrototypeParsingType { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">The ClassPrototypeParsingType of the current token, or PrototypeParsingType.Null if it hasn\'t been set or the iterator is out of bounds.</div></div>",3450:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> LineNumber { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The line number of the current token, or the one it left off on if it went out of bounds.</div></div>",3451:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3451\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> CharNumber { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The character number of the current token, or the one it left off on if it went out of bounds.&nbsp; The first character is one, not zero, and it is relative to the line, not the entire string.</div></div>",3452:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3452\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Position Position { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The position of the current token.</div></div>",3453:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3453\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> RawTextIndex { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The offset of the current token into Tokenizer.RawText.&nbsp; Will be zero if it went past the beginning, or the index one past the last character if it went past the end.</div></div>",3454:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3454\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> RawTextLength { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The length of the current token in characters, or zero if the iterator is out of bounds.</div></div>",3455:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3455\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> TokenIndex { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The current index into &lt;Tokenizer.Tokens&gt;.</div></div>",3456:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3456\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public bool</span> IsInBounds { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">Whether the iterator is not past the beginning or end of the list of tokens.</div></div>",3457:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype3457\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Tokenizer Tokenizer { <span class=\"SHKeyword\">get</span> }</div><div class=\"TTSummary\">The Tokenizer associated with this iterator.</div></div>",3459:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3459\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public override bool</span> Equals (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3460:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype3460\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public override int</span> GetHashCode ()</div></div>",3461:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3461\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>== (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3462:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3462\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>!= (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3463:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3463\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>&gt; (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3464:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3464\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>&gt;= (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3465:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3465\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>&lt; (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3466:"<div class=\"NDToolTip TOperator LCSharp\"><div id=\"NDPrototype3466\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool operator</span>&lt;= (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">a,</td></tr><tr><td class=\"PType first\">TokenIterator&nbsp;</td><td class=\"PName last\">b</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",3468:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3468\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Tokenizer tokenizer</div><div class=\"TTSummary\">The Tokenizer associated with this iterator.</div></div>",3469:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3469\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> tokenIndex</div><div class=\"TTSummary\">The current index into the tokens.&nbsp; Can be a negative number if we\'re before the first token.</div></div>",3470:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3470\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> rawTextIndex</div><div class=\"TTSummary\">The current index into Tokenizer.RawText.</div></div>",3471:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype3471\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> lineNumber</div><div class=\"TTSummary\">The current line number.&nbsp; Lines start at one instead of zero.</div></div>"});