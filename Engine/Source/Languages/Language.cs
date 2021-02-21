﻿/* 
 * Class: CodeClear.NaturalDocs.Engine.Languages.Language
 * ____________________________________________________________________________
 * 
 * A class encapsulating information about a language.
 * 
 * 
 * Multithreading: Thread Safety Notes
 * 
 *		Once the object is set up, meaning there will be no further changes to properties like <LineCommentStrings>,
 *		the object is read-only and can be used by multiple threads simultaneously.  <Parser> stores no parsing state 
 *		information so it is also okay to be used by multiple threads simulaneously.
 *		
 *	
 * Topic: Language-Specific Parsers
 * 
 *		The <Parser> property can be set to a language-specific one instead of the default generalized one.  In order to
 *		have it used automatically you must also create a predefined language entry in <Languages.Manager>'s 
 *		constructor.
 * 
 */

// This file is part of Natural Docs, which is Copyright © 2003-2021 Code Clear LLC.
// Natural Docs is licensed under version 3 of the GNU Affero General Public License (AGPL)
// Refer to License.txt for the complete details


using System;
using CodeClear.NaturalDocs.Engine.Collections;


namespace CodeClear.NaturalDocs.Engine.Languages
	{
	public class Language : IDObjects.Base
		{
		
		// Group: Types
		// __________________________________________________________________________
		
		
		/* Enum: EnumValues
		 * Can be Global, UnderType, or UnderParent.
		 */
		public enum EnumValues : byte
			{  Global, UnderType, UnderParent  };
		
		
		/* Enum: LanguageType
		 * 
		 * The type of language or file this is.
		 *
		 * FullSupport - The language is fully supported.
		 * BasicSupport - The language has basic support.
		 * TextFile - The file is a text file.
		 * Container - The file is a container, meaning it's contents may contain code from other languages, such as .cgi and .asp files.
		 */
		public enum LanguageType : byte
			{  FullSupport, BasicSupport, TextFile, Container  };
		
		
		/* Enum: LanguageFlags
		 * 
		 * InSystemFile - Set if the language was defined in the system config file <Languages.txt>.
		 * InProjectFile - Set if the language was defined in the project config file <Languages.txt>.  Not set for Alter Language.
		 * 
		 * InConfigFiles - A combination of <InSystemFile> and <InProjectFile> used for testing if either are set.
		 * 
		 * InBinaryFile - Set if the language was present in <Languages.nd>
		 * Predefined - Set if the language is predefined by Natural Docs.
		 */
		[Flags]
		protected enum LanguageFlags : byte
			{
			InSystemFile = 0x01,
			InProjectFile = 0x02,
			
			InConfigFiles = InSystemFile | InProjectFile,
			
			InBinaryFile = 0x04,
			Predefined = 0x08
			}
		
		
		
		// Group: Functions
		// __________________________________________________________________________
		
		
		/* Constructor: Language
		 * Creates a new language object.
		 */
		public Language (Languages.Manager manager, string name) : base ()
			{
			this.manager = manager;
			this.name = name;

			// Leave null so it can be set to a derived class.  A generic one will be created on use if this doesn't happen.
			parser = null;

			simpleIdentifier = null;			
			type = LanguageType.BasicSupport;
			lineCommentStrings = null;
			blockCommentStringPairs = null;
			javadocLineCommentStringPairs = null;
			javadocBlockCommentStringPairs = null;
			xmlLineCommentStrings = null;
			memberOperator = ".";
			commentTypesToPrototypeEnders = null;
			lineExtender = null;
			enumValue = EnumValues.UnderType;
			caseSensitive = true;
			flags = 0;
			}


		/* Function: GenerateJavadocCommentStrings
		 * If they're not already defined, generate <JavadocLineCommentStringPairs> and <JavadocBlockCommentStringPairs>
		 * from <LineCommentStrings> and <BlockCommentStringPairs>.
		 */
		public void GenerateJavadocCommentStrings ()
			{
			if (javadocBlockCommentStringPairs == null && blockCommentStringPairs != null)
				{
				int count = 0;

				for (int i = 0; i < blockCommentStringPairs.Length; i += 2)
					{
					// We only accept strings like /* */ and (* *).  Anything else doesn't get it.
					if (blockCommentStringPairs[i].Length == 2 && 
						 blockCommentStringPairs[i+1].Length == 2 &&
						 blockCommentStringPairs[i][1] == '*' &&
						 blockCommentStringPairs[i+1][0] == '*')
						{  count++;  }
					}

				if (count > 0)
					{
					javadocBlockCommentStringPairs = new string[count * 2];
					int javadocIndex = 0;

					for (int i = 0; i < blockCommentStringPairs.Length; i += 2)
						{
						if (blockCommentStringPairs[i].Length == 2 && 
							 blockCommentStringPairs[i+1].Length == 2 &&
							 blockCommentStringPairs[i][1] == '*' &&
							 blockCommentStringPairs[i+1][0] == '*')
							{  
							javadocBlockCommentStringPairs[javadocIndex] = blockCommentStringPairs[i] + '*';
							javadocBlockCommentStringPairs[javadocIndex+1] = blockCommentStringPairs[i+1];
							javadocIndex += 2;
							}
						}
					}
				}

			if (javadocLineCommentStringPairs == null && lineCommentStrings != null)
				{
				javadocLineCommentStringPairs = new string[lineCommentStrings.Length * 2];

				for (int i = 0; i < lineCommentStrings.Length; i++)
					{
					javadocLineCommentStringPairs[i*2] = lineCommentStrings[i] + lineCommentStrings[i][ lineCommentStrings[i].Length - 1 ];
					javadocLineCommentStringPairs[(i*2)+1] = lineCommentStrings[i];
					}
				}
			}


		/* Function: GenerateXMLCommentStrings
		 * If they're not already defined, generate <XMLLineCommentStrings> from <LineCommentStrings>.
		 */
		public void GenerateXMLCommentStrings ()
			{
			if (xmlLineCommentStrings == null && lineCommentStrings != null)
				{
				xmlLineCommentStrings = new string[lineCommentStrings.Length];

				for (int i = 0; i < lineCommentStrings.Length; i++)
					{
					// If it's only one character, turn it to three like ''' in Visual Basic.
					if (lineCommentStrings[i].Length == 1)
						{  xmlLineCommentStrings[i] = lineCommentStrings[i] + lineCommentStrings[i][0] + lineCommentStrings[i];  }

					// Otherwise just duplicate the last charater like /// in C#.
					else
						{  xmlLineCommentStrings[i] = lineCommentStrings[i] + lineCommentStrings[i][ lineCommentStrings[i].Length - 1 ];  }
					}
				}
			}


			
		// Group: Language Properties
		// __________________________________________________________________________
		
		
		/* Property: EngineInstance
		 * The <Engine.Instance> associated with this language.
		 */
		public Engine.Instance EngineInstance
			{
			get
				{  return Manager.EngineInstance;  }
			}

		/* Property: Manager
		 * The <Languages.Manager> associated with this language.
		 */
		public Languages.Manager Manager
			{
			get
				{  return manager;  }
			}

		/* Property: Parser
		 * The <Languages.Parser> associated with this language.  This can be set to class derived from <Languages.Parser>, or
		 * it will return a generic one if not.
		 */
		public Languages.Parser Parser
			{
			get
				{  
				// Create on use.  This is technically a race condition because multiple threads could call this at the same time while
				// it's null and more than one parser object could be created.  However, this is a harmless situation as they would both
				// be equivalent and there's no parsing state information stored inside them.  One would end up saved here and one
				// would be abandoned and garbage collected after one use with no ill effects.  Therefore it's not worth the overhead
				// of protecting with a lock.
				if (parser == null)
					{  parser = new Parser(EngineInstance, this);  }

				return parser;
				}
			set
				{  parser = value;  }
			}
			
		/* Property: Name
		 * The name of the language.
		 */
		override public string Name
			{
			get
				{  return name;  }
			}

		/* Property: SimpleIdentifier
		 * The name of the language using only the letters A to Z.
		 */
		public string SimpleIdentifier
			{
			get
				{
				// Generate and store the default.  Since Name can't be changed, we don't have to worry
				// about keeping simpleIdentifier null so it can be regenerated again.
				if (simpleIdentifier == null)
					{  simpleIdentifier = name.OnlyAToZ();  }
					
				// A fallback if that still didn't work.
				if (simpleIdentifier == null)
					{  simpleIdentifier = "LanguageID" + ID;  }
					
				return simpleIdentifier;
				}
			set
				{  simpleIdentifier = value;  }
			}
			
		/* Property: Type
		 * The type of the language or file.
		 */
		public LanguageType Type
			{
			get
				{  return type;  }
			set
				{  type = value;  }
			}
			
		/* Property: LineCommentStrings
		 * An array of strings representing line comment symbols.  Will be null if none are defined.
		 */
		public string[] LineCommentStrings
			{
			get
				{  return lineCommentStrings;  }
			set
				{
				if (value != null && value.Length != 0)
					{  lineCommentStrings = value;  }
				else
					{  lineCommentStrings = null;  }
				}
			}
			
		/* Property: BlockCommentStringPairs
		 * An array of string pairs representing start and stop block comment symbols.  Will be null if none are defined.
		 */
		public string[] BlockCommentStringPairs
			{
			get
				{  return blockCommentStringPairs;  }
			set
				{
				if (value != null && value.Length != 0)
					{  
					if (value.Length % 2 == 1)
						{  throw new Engine.Exceptions.ArrayDidntHaveEvenLength("BlockCommentStringPairs");  }

					blockCommentStringPairs = value;  
					}
				else
					{  blockCommentStringPairs = null;  }
				}
			}
			
		/* Property: JavadocLineCommentStringPairs
		 * An array of string pairs representing Javadoc line comment symbols.  The first are are the symbols that must start the
		 * comment, and the second are the symbols that must be used on every following line.  Will be null if none are defined.
		 */
		public string[] JavadocLineCommentStringPairs
			{
			get
				{  return javadocLineCommentStringPairs;  }
			set
				{
				if (value != null && value.Length != 0)
					{  
					if (value.Length % 2 == 1)
						{  throw new Engine.Exceptions.ArrayDidntHaveEvenLength("JavadocLineCommentStringPairs");  }

					javadocLineCommentStringPairs = value;  
					}
				else
					{  javadocLineCommentStringPairs = null;  }
				}
			}
			
		/* Property: JavadocBlockCommentStringPairs
		 * An array of string pairs representing start and stop Javadoc block comment symbols.  Will be null if none are defined.
		 */
		public string[] JavadocBlockCommentStringPairs
			{
			get
				{  return javadocBlockCommentStringPairs;  }
			set
				{
				if (value != null && value.Length != 0)
					{  
					if (value.Length % 2 == 1)
						{  throw new Engine.Exceptions.ArrayDidntHaveEvenLength("JavadocBlockCommentStringPairs");  }

					javadocBlockCommentStringPairs = value;  
					}
				else
					{  javadocBlockCommentStringPairs = null;  }
				}
			}
			
		/* Property: XMLLineCommentStrings
		 * An array of strings representing XML line comment symbols.  Will be null if none are defined.
		 */
		public string[] XMLLineCommentStrings
			{
			get
				{  return xmlLineCommentStrings;  }
			set
				{
				if (value != null && value.Length != 0)
					{  xmlLineCommentStrings = value;  }
				else
					{  xmlLineCommentStrings = null;  }
				}
			}

		/* Property: MemberOperator
		 * A string representing the default member operator symbol.
		 */
		public string MemberOperator
			{
			get
				{  return memberOperator;  }
			set
				{  memberOperator = value;  }
			}
		
		/* Property: LineExtender
		 * A string representing the line extender symbol if line breaks are significant to the language.
		 */
		 public string LineExtender
			{
			get
				{  return lineExtender;  }
			set
				{  lineExtender = value;  }
			}
			
		/* Function: GetPrototypeEnders
		 * Returns the <PrototypeEnders> for the passed comment type, or null if there are none.
		 */
		public PrototypeEnders GetPrototypeEnders (int commentTypeID)
			{
			if (commentTypesToPrototypeEnders == null)
				{  return null;  }
			else
				{  return commentTypesToPrototypeEnders[commentTypeID];  }
			}
			
		/* Function: SetPrototypeEnders
		 * Sets the <PrototypeEnders> for the passed comment type.
		 */
		public void SetPrototypeEnders (int commentTypeID, PrototypeEnders prototypeEnders)
			{
			// Simplify prototypeEnders
			if (prototypeEnders != null)
				{
				if (prototypeEnders.Symbols != null && prototypeEnders.Symbols.Length == 0)
					{  prototypeEnders.Symbols = null;  }

				if (prototypeEnders.Symbols == null && prototypeEnders.IncludeLineBreaks == false)
					{  prototypeEnders = null;  }
				}

			if (prototypeEnders == null)
				{
				if (commentTypesToPrototypeEnders != null)
					{
					commentTypesToPrototypeEnders.Remove(commentTypeID);
					if (commentTypesToPrototypeEnders.Count == 0)
						{  commentTypesToPrototypeEnders = null;  }
					}
				}
			else
				{
				if (commentTypesToPrototypeEnders == null)
					{  commentTypesToPrototypeEnders = new SafeDictionary<int, PrototypeEnders>();  }
					
				commentTypesToPrototypeEnders[commentTypeID] = prototypeEnders;
				}
			}
			
		/* Function: GetCommentTypesWithPrototypeEnders
		 * Returns an array of all the comment types that have prototype enders defined, or null if none.
		 */
		public int[] GetCommentTypesWithPrototypeEnders()
			{
			if (commentTypesToPrototypeEnders == null)
				{  return null;  }
			else
				{
				int[] result = new int[ commentTypesToPrototypeEnders.Keys.Count ];
				commentTypesToPrototypeEnders.Keys.CopyTo(result, 0);
				return result;  
				}
			}
			
			
		/* Property: EnumValue
		 * How enum values are referenced.
		 */
		public EnumValues EnumValue
			{
			get
				{  return enumValue;  }
			set
				{  enumValue = value;  }
			}


		/* Property: CaseSensitive
		 * Whether the language's identifiers are case sensitive.
		 */
		public bool CaseSensitive
			{
			get
				{  return caseSensitive;  }
			set
				{  caseSensitive = value;  }
			}

			
			
		
		// Group: Flags
		// These properties do not affect the equality operators.
		// __________________________________________________________________________
		
		
		/* Property: InSystemFile
		 * Whether this language was defined in the system <Languages.txt> file.
		 */
		public bool InSystemFile
			{
			get
				{  return ( (flags & LanguageFlags.InSystemFile) != 0);  }
			set
				{  
				if (value == true)
					{  flags |= LanguageFlags.InSystemFile;  }
				else
					{  flags &= ~LanguageFlags.InSystemFile;  }
				}
			}
			
		/* Property: InProjectFile
		 * Whether this language was defined in the project <Languages.txt> file.
		 */
		public bool InProjectFile
			{
			get
				{  return ( (flags & LanguageFlags.InProjectFile) != 0);  }
			set
				{  
				if (value == true)
					{  flags |= LanguageFlags.InProjectFile;  }
				else
					{  flags &= ~LanguageFlags.InProjectFile;  }
				}
			}
			
		/* Property: InConfigFiles
		 * Whether this language was defined in either of the <Languages.txt> files.
		 */
		public bool InConfigFiles
			{
			get
				{  return ( (flags & LanguageFlags.InConfigFiles) != 0);  }
			}
			
		/* Property: InBinaryFile
		 * Whether this language was present in <Languages.nd>.
		 */
		public bool InBinaryFile
			{
			get
				{  return ( (flags & LanguageFlags.InBinaryFile) != 0);  }
			set
				{
				if (value == true)
					{  flags |= LanguageFlags.InBinaryFile;  }
				else
					{  flags &= ~LanguageFlags.InBinaryFile;  }
				}
			}
			
		/* Property: Predefined
		 * Whether this language is predefined by Natural Docs.
		 */
		public bool Predefined
			{
			get
				{  return ( (flags & LanguageFlags.Predefined) != 0);  }
			set
				{
				if (value == true)
					{  flags |= LanguageFlags.Predefined;  }
				else
					{  flags &= ~LanguageFlags.Predefined;  }
				}
			}



		// Group: Operators
		// __________________________________________________________________________
		
		
		/* Function: operator ==
		 * Returns whether all the properties of the two languages are equal, including Name and ID, but excluding flags.
		 */
		public static bool operator == (Language language1, Language language2)
			{
			if ((object)language1 == null && (object)language2 == null)
				{  return true;  }
			else if ((object)language1 == null || (object)language2 == null)
				{  return false;  }
			else
				{
				// Deliberately does not include Flags
				return ( language1.ID == language2.ID &&
							language1.Type == language2.Type &&
							language1.EnumValue == language2.EnumValue &&
							language1.CaseSensitive == language2.CaseSensitive &&
						  
							language1.Name == language2.Name &&
							language1.SimpleIdentifier == language2.SimpleIdentifier &&
							language1.MemberOperator == language2.MemberOperator &&
							language1.LineExtender == language2.LineExtender &&

							StringArraysAreEqual (language1.lineCommentStrings, language2.lineCommentStrings) &&
							StringPairArraysAreEqual (language1.blockCommentStringPairs, language2.blockCommentStringPairs) &&
							PrototypeEndersAreEqual (language1.commentTypesToPrototypeEnders, language2.commentTypesToPrototypeEnders) &&
							StringPairArraysAreEqual (language1.javadocLineCommentStringPairs, language2.javadocLineCommentStringPairs) &&
							StringPairArraysAreEqual (language1.javadocBlockCommentStringPairs, language2.javadocBlockCommentStringPairs) &&
							StringArraysAreEqual (language1.xmlLineCommentStrings, language2.xmlLineCommentStrings) );
				}
			}
			
		
		/* Function: operator !=
		 * Returns if any of the properties of the two languages are inequal, including Name and ID, but excluding flags.
		 */
		public static bool operator != (Language language1, Language language2)
			{
			return !(language1 == language2);
			}
			
			
		/* Function: StringArraysAreEqual
		 * Compares two arrays of strings, ignoring the order they exist in.  Is case sensitive and safe to use with nulls.
		 */
		public static bool StringArraysAreEqual (string[] array1, string[] array2)
			{
			if (array1 == null && array2 == null)
				{  return true;  }
			else if (array1 == null || array2 == null)
				{  return false;  }
			else if (array1.Length != array2.Length)
				{  return false;  }
			else
				{
				Collections.StringSet array1set = new Collections.StringSet();
				
				foreach (string array1item in array1)
					{  array1set.Add(array1item);  }
					
				foreach (string array2item in array2)
					{
					if (!array1set.Contains(array2item))
						{  return false;  }
					}
					
				return true;
				}
			}
			
			
		/* Function: StringPairArraysAreEqual
		 * Compares two arrays of string pairs, ignoring the order they exist in.  Is case sensitive and safe to use with nulls.
		 */
		public static bool StringPairArraysAreEqual (string[] array1, string[] array2)
			{
			if (array1 == null && array2 == null)
				{  return true;  }
			else if (array1 == null || array2 == null)
				{  return false;  }
			else if (array1.Length != array2.Length)
				{  return false;  }
			else
				{
				Collections.StringSet array1set = new Collections.StringSet();
				
				for (int i = 0; i < array1.Length; i += 2)
					{  array1set.Add( array1[i] + array1[i+1] );  }
					
				for (int i = 0; i < array2.Length; i += 2)
					{
					if (!array1set.Contains( array2[i] + array2[i+1] ))
						{  return false;  }
					}
					
				return true;
				}
			}
			
			
		/* Function: PrototypeEndersAreEqual
		 * Compares two prototype ender dictionaries.  Is case sensitive and safe to use with nulls.
		 */
		protected static bool PrototypeEndersAreEqual (SafeDictionary<int, PrototypeEnders> commentTypesToPrototypeEnders1, 
																								  SafeDictionary<int, PrototypeEnders> commentTypesToPrototypeEnders2)
			{
			if (commentTypesToPrototypeEnders1 == null && commentTypesToPrototypeEnders2 == null)
				{  return true;  }
			else if (commentTypesToPrototypeEnders1 == null || commentTypesToPrototypeEnders2 == null)
				{  return false;  }
			else if (commentTypesToPrototypeEnders1.Count != commentTypesToPrototypeEnders2.Count)
				{  return false;  }
			else
				{
				foreach (System.Collections.Generic.KeyValuePair<int, PrototypeEnders> prototypeEnders1Pair in commentTypesToPrototypeEnders1)
					{
					PrototypeEnders prototypeEnders2Value = commentTypesToPrototypeEnders2[ prototypeEnders1Pair.Key ];

					if (prototypeEnders2Value == null)
						{  return false;  }

					if (prototypeEnders1Pair.Value.IncludeLineBreaks != prototypeEnders2Value.IncludeLineBreaks ||
						!StringArraysAreEqual(prototypeEnders1Pair.Value.Symbols, prototypeEnders2Value.Symbols) )
						{  return false;  }
					}
					
				return true;
				}
			}


			
		// Group: Interface Functions
		// __________________________________________________________________________
		
		
		public override bool Equals (object o)
			{
			if (o is Language)
				{  return (this == (Language)o);  }
			else
				{  return false;  }
			}


		public override int GetHashCode ()
			{
			return Name.GetHashCode();
			}
			
			
		
		// Group: Variables
		// __________________________________________________________________________
		
		/* var: manager
		 * The <Languages.Manager> this language is associated with.
		 */
		protected Languages.Manager manager;

		/* var: parser
		 * The <Languages.Parser> associated with this language.  Is null and created on first use.
		 */
		protected Languages.Parser parser;

		/* var: name
		 * The language name.
		 */
		protected string name;

		/* var: simpleIdentifier
		 * The language's name using only the letters A to Z, or null if it's not defined.
		 */
		protected string simpleIdentifier;
		
		/* var: type
		 * The type of the language or file.
		 */
		protected LanguageType type;

		/* array: lineCommentStrings
		 * An array of strings that start line comments.
		 */
		protected string[] lineCommentStrings;
		
		/* array: blockCommentStringPairs
		 * An array of string pairs that start and end block comments.
		 */
		protected string[] blockCommentStringPairs;
		
		/* array: javadocLineCommentStringPairs
		 * An array of string pairs that start Javadoc line comments.  The first will be the symbol that must start it, and
		 * the second will be the symbol that must be used on every following line.
		 */
		protected string[] javadocLineCommentStringPairs;
		
		/* array: javadocBlockCommentStringPairs
		 * An array of string pairs that start and end Javadoc black comments.
		 */
		protected string[] javadocBlockCommentStringPairs;
		
		/* array: xmlLineCommentStrings
		 * An array of strings that start XML line comments.
		 */
		protected string[] xmlLineCommentStrings;

		/* string: memberOperator
		 * A string representing the default member operator symbol.
		 */
		protected string memberOperator;
		
		/* object: commentTypesToPrototypeEnders
		 * A dictionary mapping comment type IDs to <PrototypeEnders>.
		 */
		protected SafeDictionary<int, PrototypeEnders> commentTypesToPrototypeEnders;
		
		/* string: lineExtender
		 * A string representing the line extender symbol if line breaks are significant to the language.
		 */
		protected string lineExtender;
		
		/* var: enumValue
		 * How the language handles enum values.
		 */
		protected EnumValues enumValue;

		/* var: caseSensitive
		 * Whether the language is case sensitive or not.
		 */
		protected bool caseSensitive;
		
		/* var: flags
		 * A combination of <FlagValues> describing the language.
		 */
		protected LanguageFlags flags;

		}

	}