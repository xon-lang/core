// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly IS = 9;
	public static readonly AS = 10;
	public static readonly DO = 11;
	public static readonly IF = 12;
	public static readonly IN = 13;
	public static readonly FOR = 14;
	public static readonly ELSE = 15;
	public static readonly TEST = 16;
	public static readonly BREAK = 17;
	public static readonly INFIX = 18;
	public static readonly WHILE = 19;
	public static readonly ACTUAL = 20;
	public static readonly EXPECT = 21;
	public static readonly EXPORT = 22;
	public static readonly IMPORT = 23;
	public static readonly PREFIX = 24;
	public static readonly RETURN = 25;
	public static readonly POSTFIX = 26;
	public static readonly EXTENSION = 27;
	public static readonly AT = 28;
	public static readonly DOT = 29;
	public static readonly RANGE = 30;
	public static readonly SPREAD = 31;
	public static readonly PLUS = 32;
	public static readonly HASH = 33;
	public static readonly PIPE = 34;
	public static readonly LESS = 35;
	public static readonly LESS_EQUAL = 36;
	public static readonly COMMA = 37;
	public static readonly COLON = 38;
	public static readonly GREAT = 39;
	public static readonly GREAT_EQUAL = 40;
	public static readonly MINUS = 41;
	public static readonly SLASH = 42;
	public static readonly CARET = 43;
	public static readonly TILDE = 44;
	public static readonly ASSIGN = 45;
	public static readonly EQUAL = 46;
	public static readonly NOT_EQUAL = 47;
	public static readonly DOLLAR = 48;
	public static readonly MODULO = 49;
	public static readonly QUESTION = 50;
	public static readonly COALESCING = 51;
	public static readonly ASTERISK = 52;
	public static readonly AMPERSAND = 53;
	public static readonly AND = 54;
	public static readonly OR = 55;
	public static readonly UNDERSCORE = 56;
	public static readonly EXCLAMATION = 57;
	public static readonly BACK_SLASH = 58;
	public static readonly NULL_LITERAL = 59;
	public static readonly FLOAT_LITERAL = 60;
	public static readonly INTEGER_LITERAL = 61;
	public static readonly BOOLEAN_LITERAL = 62;
	public static readonly CHAR_LITERAL = 63;
	public static readonly STRING_LITERAL = 64;
	public static readonly PREPROCESSOR = 65;
	public static readonly UPPER_ID = 66;
	public static readonly LOWER_ID = 67;
	public static readonly NL = 68;
	public static readonly WS = 69;
	public static readonly COMMENT = 70;
	public static readonly RULE_source = 0;
	public static readonly RULE_sourceMember = 1;
	public static readonly RULE_export = 2;
	public static readonly RULE_library = 3;
	public static readonly RULE_libraryPath = 4;
	public static readonly RULE_libraryPathPart = 5;
	public static readonly RULE_libraryMember = 6;
	public static readonly RULE_test = 7;
	public static readonly RULE_definition = 8;
	public static readonly RULE_classMember = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_attribute = 11;
	public static readonly RULE_attributeName = 12;
	public static readonly RULE_attributeModifier = 13;
	public static readonly RULE_assignment = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_type = 16;
	public static readonly RULE_literal = 17;
	public static readonly RULE_operator = 18;
	public static readonly RULE_parameter = 19;
	public static readonly RULE_functionParameters = 20;
	public static readonly RULE_indexParameters = 21;
	public static readonly RULE_lambdaParameters = 22;
	public static readonly RULE_argument = 23;
	public static readonly RULE_functionArguments = 24;
	public static readonly RULE_indexArguments = 25;
	public static readonly RULE_genericParameter = 26;
	public static readonly RULE_genericParameters = 27;
	public static readonly RULE_genericArguments = 28;
	public static readonly RULE_body = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceMember", "export", "library", "libraryPath", "libraryPathPart", 
		"libraryMember", "test", "definition", "classMember", "statement", "attribute", 
		"attributeName", "attributeModifier", "assignment", "expression", "type", 
		"literal", "operator", "parameter", "functionParameters", "indexParameters", 
		"lambdaParameters", "argument", "functionArguments", "indexArguments", 
		"genericParameter", "genericParameters", "genericArguments", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'test'", "'break'", 
		"'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'..'", 
		"'...'", "'+'", "'#'", "'|'", "'<'", "'<='", "','", "':'", "'>'", "'>='", 
		"'-'", "'/'", "'^'", "'~'", "'='", "'=='", "'!='", "'$'", "'%'", "'?'", 
		"'?.'", "'*'", "'&'", "'&&'", "'||'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "RANGE", "SPREAD", "PLUS", "HASH", "PIPE", "LESS", "LESS_EQUAL", 
		"COMMA", "COLON", "GREAT", "GREAT_EQUAL", "MINUS", "SLASH", "CARET", "TILDE", 
		"ASSIGN", "EQUAL", "NOT_EQUAL", "DOLLAR", "MODULO", "QUESTION", "COALESCING", 
		"ASTERISK", "AMPERSAND", "AND", "OR", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", 
		"NULL_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", 
		"NL", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 60;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 61;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 62;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.TEST || _la === XonParser.UPPER_ID || _la === XonParser.NL) {
				{
				this.state = 70;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.TEST:
				case XonParser.UPPER_ID:
					{
					this.state = 68;
					this.sourceMember();
					}
					break;
				case XonParser.NL:
					{
					this.state = 69;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceMember(): SourceMemberContext {
		let _localctx: SourceMemberContext = new SourceMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_sourceMember);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.UPPER_ID:
				_localctx = new DefinitionSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.definition();
				}
				break;
			case XonParser.TEST:
				_localctx = new TestSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.test();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(XonParser.EXPORT);
			this.state = 80;
			this.libraryPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(XonParser.IMPORT);
			this.state = 83;
			this.libraryPath();
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 84;
				this.match(XonParser.AS);
				this.state = 85;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 86;
				this.match(XonParser.COLON);
				this.state = 87;
				this.libraryMember();
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 88;
					this.match(XonParser.COMMA);
					this.state = 89;
					this.libraryMember();
					}
					}
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
			case XonParser.TEST:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.UPPER_ID:
			case XonParser.NL:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 97;
				_localctx._s29 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s29);
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 103;
			this.libraryPathPart();
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 104;
				this.match(XonParser.DOT);
				this.state = 105;
				this.libraryPathPart();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryPathPart(): LibraryPathPartContext {
		let _localctx: LibraryPathPartContext = new LibraryPathPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_libraryPathPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 111;
				this.match(XonParser.AT);
				}
			}

			this.state = 114;
			this.match(XonParser.LOWER_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 117;
				this.match(XonParser.AS);
				this.state = 118;
				_localctx._alias = this.match(XonParser.UPPER_ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(XonParser.TEST);
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 122;
				this.expression(0);
				}
				break;
			}
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 125;
				this.body();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_definition);
		let _la: number;
		try {
			_localctx = new ClassDefinitionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 129;
				this.genericParameters();
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 132;
				this.functionParameters();
				}
			}

			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 135;
				this.match(XonParser.IS);
				this.state = 136;
				this.type(0);
				}
			}

			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 139;
				this.match(XonParser.COLON);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 140;
					this.match(XonParser.NL);
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 145;
				this.match(XonParser.INDENT);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 148;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.INFIX:
					case XonParser.PREFIX:
					case XonParser.POSTFIX:
					case XonParser.RANGE:
					case XonParser.PLUS:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.EQUAL:
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
					case XonParser.EXCLAMATION:
					case XonParser.LOWER_ID:
						{
						this.state = 146;
						this.classMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 147;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (XonParser.INFIX - 18)) | (1 << (XonParser.PREFIX - 18)) | (1 << (XonParser.POSTFIX - 18)) | (1 << (XonParser.RANGE - 18)) | (1 << (XonParser.PLUS - 18)) | (1 << (XonParser.LESS - 18)) | (1 << (XonParser.GREAT - 18)) | (1 << (XonParser.MINUS - 18)) | (1 << (XonParser.SLASH - 18)) | (1 << (XonParser.CARET - 18)) | (1 << (XonParser.EQUAL - 18)) | (1 << (XonParser.DOLLAR - 18)) | (1 << (XonParser.MODULO - 18)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (XonParser.ASTERISK - 52)) | (1 << (XonParser.AND - 52)) | (1 << (XonParser.OR - 52)) | (1 << (XonParser.EXCLAMATION - 52)) | (1 << (XonParser.LOWER_ID - 52)) | (1 << (XonParser.NL - 52)))) !== 0));
				this.state = 152;
				this.match(XonParser.DEDENT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMember(): ClassMemberContext {
		let _localctx: ClassMemberContext = new ClassMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_classMember);
		try {
			_localctx = new AttributeClassMemberContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.attribute();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.match(XonParser.FOR);
				this.state = 164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 159;
						this.match(XonParser.COMMA);
						this.state = 160;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 163;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 166;
				this.expression(0);
				this.state = 167;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(XonParser.WHILE);
				this.state = 170;
				this.expression(0);
				this.state = 171;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this.match(XonParser.DO);
				this.state = 174;
				this.body();
				this.state = 175;
				this.match(XonParser.WHILE);
				this.state = 176;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.match(XonParser.IF);
				this.state = 179;
				this.expression(0);
				this.state = 180;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 181;
					this.match(XonParser.ELSE);
					this.state = 182;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 185;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 186;
				this.match(XonParser.RETURN);
				this.state = 188;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 187;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 190;
				this.match(XonParser.ACTUAL);
				this.state = 191;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 192;
					this.match(XonParser.NL);
					}
					}
					this.state = 195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 197;
				this.match(XonParser.EXPECT);
				this.state = 198;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 200;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 201;
				this.expression(0);
				}
				break;

			case 10:
				_localctx = new AttributeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 202;
				this.attribute();
				}
				break;

			case 11:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 203;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0)) {
				{
				{
				this.state = 206;
				this.attributeModifier();
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 212;
			this.attributeName();
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 213;
				this.genericParameters();
				}
			}

			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.type(0);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 217;
					this.body();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (XonParser.NULL_LITERAL - 59)) | (1 << (XonParser.FLOAT_LITERAL - 59)) | (1 << (XonParser.INTEGER_LITERAL - 59)) | (1 << (XonParser.BOOLEAN_LITERAL - 59)) | (1 << (XonParser.CHAR_LITERAL - 59)) | (1 << (XonParser.STRING_LITERAL - 59)) | (1 << (XonParser.UPPER_ID - 59)))) !== 0)) {
					{
					this.state = 220;
					this.type(0);
					}
				}

				this.state = 223;
				this.body();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_attributeName);
		try {
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.LOWER_ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.RANGE:
			case XonParser.PLUS:
			case XonParser.LESS:
			case XonParser.GREAT:
			case XonParser.MINUS:
			case XonParser.SLASH:
			case XonParser.CARET:
			case XonParser.EQUAL:
			case XonParser.MODULO:
			case XonParser.ASTERISK:
			case XonParser.AND:
			case XonParser.OR:
			case XonParser.EXCLAMATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.operator();
				}
				break;
			case XonParser.DOLLAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.match(XonParser.DOLLAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeModifier(): AttributeModifierContext {
		let _localctx: AttributeModifierContext = new AttributeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_attributeModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 234;
				this.match(XonParser.ASSIGN);
				this.state = 235;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 237;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 238;
					this.match(XonParser.COMMA);
					this.state = 239;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 245;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 246;
				this.match(XonParser.ASSIGN);
				this.state = 247;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 248;
				this.match(XonParser.OPEN_BRACE);
				this.state = 249;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 250;
					this.match(XonParser.COMMA);
					this.state = 251;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 257;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 258;
				this.match(XonParser.ASSIGN);
				this.state = 259;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 260;
				this.match(XonParser.DOLLAR);
				this.state = 261;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 262;
				this.match(XonParser.ASSIGN);
				this.state = 263;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 264;
				this.expression(0);
				this.state = 265;
				this.match(XonParser.DOT);
				this.state = 266;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 267;
				this.match(XonParser.ASSIGN);
				this.state = 268;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 270;
				this.expression(0);
				this.state = 271;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 272;
				this.expression(0);
				this.state = 273;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 274;
				this.match(XonParser.ASSIGN);
				this.state = 275;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 280;
				(_localctx as IdExpressionContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.UPPER_ID || _la === XonParser.LOWER_ID)) {
					(_localctx as IdExpressionContext)._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 281;
					this.genericArguments();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				(_localctx as InstanceExpressionContext)._name = this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.match(XonParser.DOLLAR);
				this.state = 286;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 287;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.match(XonParser.OPEN_PAREN);
				this.state = 289;
				this.expression(0);
				this.state = 290;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.DOLLAR - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.BACK_SLASH - 41)) | (1 << (XonParser.NULL_LITERAL - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.BOOLEAN_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
					{
					this.state = 293;
					this.expression(0);
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 294;
						this.match(XonParser.COMMA);
						this.state = 295;
						this.expression(0);
						}
						}
						this.state = 300;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 303;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 304;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PLUS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.EXCLAMATION - 32)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 305;
				this.expression(12);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 306;
				this.match(XonParser.BACK_SLASH);
				this.state = 310;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.lambdaParameters();
					this.state = 308;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 312;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 357;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 315;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 316;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 317;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 318;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 319;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (XonParser.SLASH - 42)) | (1 << (XonParser.MODULO - 42)) | (1 << (XonParser.ASTERISK - 42)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 320;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 321;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 322;
						(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 323;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 325;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 326;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 327;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 328;
						(_localctx as ElvisExpressionContext)._op = this.match(XonParser.QUESTION);
						this.state = 329;
						(_localctx as ElvisExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 330;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 331;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (XonParser.LESS - 35)) | (1 << (XonParser.LESS_EQUAL - 35)) | (1 << (XonParser.GREAT - 35)) | (1 << (XonParser.GREAT_EQUAL - 35)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 332;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 333;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 334;
						(_localctx as EqualityExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.NOT_EQUAL)) {
							(_localctx as EqualityExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 335;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 336;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 337;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 338;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 339;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 340;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 341;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 343;
						this.match(XonParser.PIPE);
						this.state = 344;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 345;
						this.match(XonParser.COLON);
						this.state = 346;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 347;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 348;
						this.functionArguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 349;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 350;
						this.indexArguments();
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 351;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 352;
						_la = this._input.LA(1);
						if (!(_la === XonParser.DOT || _la === XonParser.COALESCING)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 353;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 355;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
						case 1:
							{
							this.state = 354;
							this.genericArguments();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 363;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 365;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 364;
					this.genericArguments();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new LiteralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 367;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new IntersectionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 368;
				this.match(XonParser.OPEN_PAREN);
				this.state = 369;
				this.type(0);
				this.state = 370;
				this.match(XonParser.AMPERSAND);
				this.state = 371;
				this.type(0);
				this.state = 372;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 4:
				{
				_localctx = new UnionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 374;
				this.match(XonParser.OPEN_PAREN);
				this.state = 375;
				this.type(0);
				this.state = 376;
				this.match(XonParser.PIPE);
				this.state = 377;
				this.type(0);
				this.state = 378;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 5:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 380;
				this.functionParameters();
				this.state = 382;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 381;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new FunctionParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 384;
				this.match(XonParser.OPEN_PAREN);
				this.state = 385;
				this.functionParameters();
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (XonParser.NULL_LITERAL - 59)) | (1 << (XonParser.FLOAT_LITERAL - 59)) | (1 << (XonParser.INTEGER_LITERAL - 59)) | (1 << (XonParser.BOOLEAN_LITERAL - 59)) | (1 << (XonParser.CHAR_LITERAL - 59)) | (1 << (XonParser.STRING_LITERAL - 59)) | (1 << (XonParser.UPPER_ID - 59)))) !== 0)) {
					{
					this.state = 386;
					this.type(0);
					}
				}

				this.state = 389;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new IndexTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 391;
				this.indexParameters();
				this.state = 393;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 392;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IndexParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.match(XonParser.OPEN_PAREN);
				this.state = 396;
				this.indexParameters();
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (XonParser.NULL_LITERAL - 59)) | (1 << (XonParser.FLOAT_LITERAL - 59)) | (1 << (XonParser.INTEGER_LITERAL - 59)) | (1 << (XonParser.BOOLEAN_LITERAL - 59)) | (1 << (XonParser.CHAR_LITERAL - 59)) | (1 << (XonParser.STRING_LITERAL - 59)) | (1 << (XonParser.UPPER_ID - 59)))) !== 0)) {
					{
					this.state = 397;
					this.type(0);
					}
				}

				this.state = 400;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 418;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 404;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 405;
						this.match(XonParser.AMPERSAND);
						this.state = 406;
						this.type(9);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 407;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 408;
						this.match(XonParser.PIPE);
						this.state = 409;
						this.type(7);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 410;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 411;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 412;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 413;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 415;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.INTEGER_LITERAL) {
							{
							this.state = 414;
							(_localctx as ArrayTypeContext)._size = this.match(XonParser.INTEGER_LITERAL);
							}
						}

						this.state = 417;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XonParser.RULE_literal);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 425;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 426;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 427;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 428;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.RANGE - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AND - 30)) | (1 << (XonParser.OR - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (XonParser.NULL_LITERAL - 59)) | (1 << (XonParser.FLOAT_LITERAL - 59)) | (1 << (XonParser.INTEGER_LITERAL - 59)) | (1 << (XonParser.BOOLEAN_LITERAL - 59)) | (1 << (XonParser.CHAR_LITERAL - 59)) | (1 << (XonParser.STRING_LITERAL - 59)) | (1 << (XonParser.UPPER_ID - 59)))) !== 0)) {
				{
				this.state = 434;
				this.type(0);
				}
			}

			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 437;
				this.match(XonParser.HASH);
				this.state = 438;
				_localctx._meta = this.match(XonParser.UPPER_ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(XonParser.OPEN_PAREN);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 442;
				this.parameter();
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 443;
					this.match(XonParser.COMMA);
					this.state = 444;
					this.parameter();
					}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 452;
			this.match(XonParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexParameters(): IndexParametersContext {
		let _localctx: IndexParametersContext = new IndexParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_indexParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 455;
				this.parameter();
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 456;
					this.match(XonParser.COMMA);
					this.state = 457;
					this.parameter();
					}
					}
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 465;
			this.match(XonParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.parameter();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 468;
				this.match(XonParser.COMMA);
				this.state = 469;
				this.parameter();
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionArguments(): FunctionArgumentsContext {
		let _localctx: FunctionArgumentsContext = new FunctionArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XonParser.RULE_functionArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(XonParser.OPEN_PAREN);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.DOLLAR - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.BACK_SLASH - 41)) | (1 << (XonParser.NULL_LITERAL - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.BOOLEAN_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 478;
				this.argument();
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 479;
					this.match(XonParser.COMMA);
					this.state = 480;
					this.argument();
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 488;
			this.match(XonParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexArguments(): IndexArgumentsContext {
		let _localctx: IndexArgumentsContext = new IndexArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_indexArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(XonParser.OPEN_BRACKET);
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (XonParser.OPEN_BRACKET - 3)) | (1 << (XonParser.OPEN_PAREN - 3)) | (1 << (XonParser.PLUS - 3)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (XonParser.MINUS - 41)) | (1 << (XonParser.DOLLAR - 41)) | (1 << (XonParser.EXCLAMATION - 41)) | (1 << (XonParser.BACK_SLASH - 41)) | (1 << (XonParser.NULL_LITERAL - 41)) | (1 << (XonParser.FLOAT_LITERAL - 41)) | (1 << (XonParser.INTEGER_LITERAL - 41)) | (1 << (XonParser.BOOLEAN_LITERAL - 41)) | (1 << (XonParser.CHAR_LITERAL - 41)) | (1 << (XonParser.STRING_LITERAL - 41)) | (1 << (XonParser.UPPER_ID - 41)) | (1 << (XonParser.LOWER_ID - 41)))) !== 0)) {
				{
				this.state = 491;
				this.argument();
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 492;
					this.match(XonParser.COMMA);
					this.state = 493;
					this.argument();
					}
					}
					this.state = 498;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 501;
			this.match(XonParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericParameter(): GenericParameterContext {
		let _localctx: GenericParameterContext = new GenericParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, XonParser.RULE_genericParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.SPREAD) {
				{
				this.state = 503;
				this.match(XonParser.SPREAD);
				}
			}

			this.state = 506;
			_localctx._name = this.match(XonParser.UPPER_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericParameters(): GenericParametersContext {
		let _localctx: GenericParametersContext = new GenericParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(XonParser.LESS);
			this.state = 509;
			this.genericParameter();
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 510;
				this.match(XonParser.COMMA);
				this.state = 511;
				this.genericParameter();
				}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 517;
			this.match(XonParser.GREAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericArguments(): GenericArgumentsContext {
		let _localctx: GenericArgumentsContext = new GenericArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(XonParser.LESS);
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (XonParser.NULL_LITERAL - 59)) | (1 << (XonParser.FLOAT_LITERAL - 59)) | (1 << (XonParser.INTEGER_LITERAL - 59)) | (1 << (XonParser.BOOLEAN_LITERAL - 59)) | (1 << (XonParser.CHAR_LITERAL - 59)) | (1 << (XonParser.STRING_LITERAL - 59)) | (1 << (XonParser.UPPER_ID - 59)))) !== 0)) {
				{
				this.state = 520;
				this.type(0);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 521;
					this.match(XonParser.COMMA);
					this.state = 522;
					this.type(0);
					}
					}
					this.state = 527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 530;
			this.match(XonParser.GREAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(XonParser.COLON);
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 533;
				this.statement();
				}
				break;

			case 2:
				{
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 534;
					this.match(XonParser.NL);
					}
					}
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 539;
				this.match(XonParser.INDENT);
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 542;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.INFIX:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.PREFIX:
					case XonParser.RETURN:
					case XonParser.POSTFIX:
					case XonParser.RANGE:
					case XonParser.PLUS:
					case XonParser.LESS:
					case XonParser.GREAT:
					case XonParser.MINUS:
					case XonParser.SLASH:
					case XonParser.CARET:
					case XonParser.EQUAL:
					case XonParser.DOLLAR:
					case XonParser.MODULO:
					case XonParser.ASTERISK:
					case XonParser.AND:
					case XonParser.OR:
					case XonParser.EXCLAMATION:
					case XonParser.BACK_SLASH:
					case XonParser.NULL_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.BOOLEAN_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 540;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 541;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.INFIX) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.PREFIX) | (1 << XonParser.RETURN) | (1 << XonParser.POSTFIX) | (1 << XonParser.RANGE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.PLUS - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.EQUAL - 32)) | (1 << (XonParser.DOLLAR - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.AND - 32)) | (1 << (XonParser.OR - 32)) | (1 << (XonParser.EXCLAMATION - 32)) | (1 << (XonParser.BACK_SLASH - 32)) | (1 << (XonParser.NULL_LITERAL - 32)) | (1 << (XonParser.FLOAT_LITERAL - 32)) | (1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.BOOLEAN_LITERAL - 32)) | (1 << (XonParser.CHAR_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.UPPER_ID - 64)) | (1 << (XonParser.LOWER_ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 546;
				this.match(XonParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 16:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 17);

		case 11:
			return this.precpred(this._ctx, 16);

		case 12:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 8);

		case 14:
			return this.precpred(this._ctx, 6);

		case 15:
			return this.precpred(this._ctx, 10);

		case 16:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u0228\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x07\x02" +
		"B\n\x02\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x07\x02I\n\x02\f\x02\x0E" +
		"\x02L\v\x02\x03\x03\x03\x03\x05\x03P\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05]" +
		"\n\x05\f\x05\x0E\x05`\v\x05\x05\x05b\n\x05\x03\x06\x07\x06e\n\x06\f\x06" +
		"\x0E\x06h\v\x06\x03\x06\x03\x06\x03\x06\x07\x06m\n\x06\f\x06\x0E\x06p" +
		"\v\x06\x03\x07\x05\x07s\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b" +
		"z\n\b\x03\t\x03\t\x05\t~\n\t\x03\t\x05\t\x81\n\t\x03\n\x03\n\x05\n\x85" +
		"\n\n\x03\n\x05\n\x88\n\n\x03\n\x03\n\x05\n\x8C\n\n\x03\n\x03\n\x06\n\x90" +
		"\n\n\r\n\x0E\n\x91\x03\n\x03\n\x03\n\x06\n\x97\n\n\r\n\x0E\n\x98\x03\n" +
		"\x05\n\x9C\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\xA4\n\f\x03\f" +
		"\x05\f\xA7\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xBA\n\f\x03\f\x03\f" +
		"\x03\f\x05\f\xBF\n\f\x03\f\x03\f\x03\f\x06\f\xC4\n\f\r\f\x0E\f\xC5\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xCF\n\f\x03\r\x07\r\xD2\n" +
		"\r\f\r\x0E\r\xD5\v\r\x03\r\x03\r\x05\r\xD9\n\r\x03\r\x03\r\x05\r\xDD\n" +
		"\r\x03\r\x05\r\xE0\n\r\x03\r\x05\r\xE3\n\r\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xE8\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\xF3\n\x10\f\x10\x0E\x10\xF6\v\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xFF\n\x10\f\x10\x0E" +
		"\x10\u0102\v\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0118\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u011D\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u012B\n\x11\f" +
		"\x11\x0E\x11\u012E\v\x11\x05\x11\u0130\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0139\n\x11\x03\x11\x05\x11\u013C" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0166\n\x11\x07\x11\u0168" +
		"\n\x11\f\x11\x0E\x11\u016B\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0170" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0181" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0186\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u018C\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0191" +
		"\n\x12\x03\x12\x03\x12\x05\x12\u0195\n\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01A2" +
		"\n\x12\x03\x12\x07\x12\u01A5\n\x12\f\x12\x0E\x12\u01A8\v\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B0\n\x13\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x05\x15\u01B6\n\x15\x03\x15\x03\x15\x05\x15\u01BA\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01C0\n\x16\f\x16\x0E\x16\u01C3" +
		"\v\x16\x05\x16\u01C5\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u01CD\n\x17\f\x17\x0E\x17\u01D0\v\x17\x05\x17\u01D2\n\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u01D9\n\x18\f\x18\x0E" +
		"\x18\u01DC\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u01E4\n\x1A\f\x1A\x0E\x1A\u01E7\v\x1A\x05\x1A\u01E9\n\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01F1\n\x1B\f\x1B\x0E\x1B" +
		"\u01F4\v\x1B\x05\x1B\u01F6\n\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u01FB" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0203\n" +
		"\x1D\f\x1D\x0E\x1D\u0206\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x07\x1E\u020E\n\x1E\f\x1E\x0E\x1E\u0211\v\x1E\x05\x1E\u0213\n" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u021A\n\x1F\r\x1F" +
		"\x0E\x1F\u021B\x03\x1F\x03\x1F\x03\x1F\x06\x1F\u0221\n\x1F\r\x1F\x0E\x1F" +
		"\u0222\x03\x1F\x05\x1F\u0226\n\x1F\x03\x1F\x02\x02\x04 \" \x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\v\x05\x02\x14\x14\x1A\x1A" +
		"\x1C\x1C\x03\x02DE\x05\x02\"\"++;;\x05\x02,,3366\x04\x02\"\"++\x04\x02" +
		"%&)*\x03\x0201\x04\x02\x1F\x1F55\f\x02  \"\"%%))+-00336689;;\x02\u027F" +
		"\x02C\x03\x02\x02\x02\x04O\x03\x02\x02\x02\x06Q\x03\x02\x02\x02\bT\x03" +
		"\x02\x02\x02\nf\x03\x02\x02\x02\fr\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02" +
		"\x10{\x03\x02\x02\x02\x12\x82\x03\x02\x02\x02\x14\x9D\x03\x02\x02\x02" +
		"\x16\xCE\x03\x02\x02\x02\x18\xD3\x03\x02\x02\x02\x1A\xE7\x03\x02\x02\x02" +
		"\x1C\xE9\x03\x02\x02\x02\x1E\u0117\x03\x02\x02\x02 \u013B\x03\x02\x02" +
		"\x02\"\u0194\x03\x02\x02\x02$\u01AF\x03\x02\x02\x02&\u01B1\x03\x02\x02" +
		"\x02(\u01B3\x03\x02\x02\x02*\u01BB\x03\x02\x02\x02,\u01C8\x03\x02\x02" +
		"\x02.\u01D5\x03\x02\x02\x020\u01DD\x03\x02\x02\x022\u01DF\x03\x02\x02" +
		"\x024\u01EC\x03\x02\x02\x026\u01FA\x03\x02\x02\x028\u01FE\x03\x02\x02" +
		"\x02:\u0209\x03\x02\x02\x02<\u0216\x03\x02\x02\x02>B\x05\b\x05\x02?B\x05" +
		"\x06\x04\x02@B\x07F\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03" +
		"\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DJ\x03" +
		"\x02\x02\x02EC\x03\x02\x02\x02FI\x05\x04\x03\x02GI\x07F\x02\x02HF\x03" +
		"\x02\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03" +
		"\x02\x02\x02K\x03\x03\x02\x02\x02LJ\x03\x02\x02\x02MP\x05\x12\n\x02NP" +
		"\x05\x10\t\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x05\x03\x02\x02\x02" +
		"QR\x07\x18\x02\x02RS\x05\n\x06\x02S\x07\x03\x02\x02\x02TU\x07\x19\x02" +
		"\x02Ua\x05\n\x06\x02VW\x07\f\x02\x02Wb\x07E\x02\x02XY\x07(\x02\x02Y^\x05" +
		"\x0E\b\x02Z[\x07\'\x02\x02[]\x05\x0E\b\x02\\Z\x03\x02\x02\x02]`\x03\x02" +
		"\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03" +
		"\x02\x02\x02aV\x03\x02\x02\x02aX\x03\x02\x02\x02ab\x03\x02\x02\x02b\t" +
		"\x03\x02\x02\x02ce\x07\x1F\x02\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02" +
		"fd\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02" +
		"in\x05\f\x07\x02jk\x07\x1F\x02\x02km\x05\f\x07\x02lj\x03\x02\x02\x02m" +
		"p\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\v\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02qs\x07\x1E\x02\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tu\x07E\x02\x02u\r\x03\x02\x02\x02vy\x07D\x02\x02wx" +
		"\x07\f\x02\x02xz\x07D\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x0F" +
		"\x03\x02\x02\x02{}\x07\x12\x02\x02|~\x05 \x11\x02}|\x03\x02\x02\x02}~" +
		"\x03\x02\x02\x02~\x80\x03\x02\x02\x02\x7F\x81\x05<\x1F\x02\x80\x7F\x03" +
		"\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02\x82\x84\x07" +
		"D\x02\x02\x83\x85\x058\x1D\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x87\x03\x02\x02\x02\x86\x88\x05*\x16\x02\x87\x86\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x8A\x07\v" +
		"\x02\x02\x8A\x8C\x05\"\x12\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C\x9B\x03\x02\x02\x02\x8D\x8F\x07(\x02\x02\x8E\x90\x07F\x02" +
		"\x02\x8F\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02" +
		"\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x96\x07\x03\x02" +
		"\x02\x94\x97\x05\x14\v\x02\x95\x97\x07F\x02\x02\x96\x94\x03\x02\x02\x02" +
		"\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x07\x04\x02\x02" +
		"\x9B\x8D\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x13\x03\x02\x02\x02" +
		"\x9D\x9E\x05\x18\r\x02\x9E\x15\x03\x02\x02\x02\x9F\xA6\x07\x10\x02\x02" +
		"\xA0\xA3\x07E\x02\x02\xA1\xA2\x07\'\x02\x02\xA2\xA4\x07E\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7" +
		"\x07\x0F\x02\x02\xA6\xA0\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xA9\x05 \x11\x02\xA9\xAA\x05<\x1F\x02\xAA\xCF\x03" +
		"\x02\x02\x02\xAB\xAC\x07\x15\x02\x02\xAC\xAD\x05 \x11\x02\xAD\xAE\x05" +
		"<\x1F\x02\xAE\xCF\x03\x02\x02\x02\xAF\xB0\x07\r\x02\x02\xB0\xB1\x05<\x1F" +
		"\x02\xB1\xB2\x07\x15\x02\x02\xB2\xB3\x05 \x11\x02\xB3\xCF\x03\x02\x02" +
		"\x02\xB4\xB5\x07\x0E\x02\x02\xB5\xB6\x05 \x11\x02\xB6\xB9\x05<\x1F\x02" +
		"\xB7\xB8\x07\x11\x02\x02\xB8\xBA\x05<\x1F\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xCF\x03\x02\x02\x02\xBB\xCF\x07\x13\x02\x02" +
		"\xBC\xBE\x07\x1B\x02\x02\xBD\xBF\x05 \x11\x02\xBE\xBD\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xCF\x03\x02\x02\x02\xC0\xC1\x07\x16\x02\x02" +
		"\xC1\xC3\x05 \x11\x02\xC2\xC4\x07F\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4" +
		"\xC5\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6" +
		"\xC7\x03\x02\x02\x02\xC7\xC8\x07\x17\x02\x02\xC8\xC9\x05 \x11\x02\xC9" +
		"\xCF\x03\x02\x02\x02\xCA\xCF\x07C\x02\x02\xCB\xCF\x05 \x11\x02\xCC\xCF" +
		"\x05\x18\r\x02\xCD\xCF\x05\x1E\x10\x02\xCE\x9F\x03\x02\x02\x02\xCE\xAB" +
		"\x03\x02\x02\x02\xCE\xAF\x03\x02\x02\x02\xCE\xB4\x03\x02\x02\x02\xCE\xBB" +
		"\x03\x02\x02\x02\xCE\xBC\x03\x02\x02\x02\xCE\xC0\x03\x02\x02\x02\xCE\xCA" +
		"\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD" +
		"\x03\x02\x02\x02\xCF\x17\x03\x02\x02\x02\xD0\xD2\x05\x1C\x0F\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4" +
		"\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD8" +
		"\x05\x1A\x0E\x02\xD7\xD9\x058\x1D\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9\xE2\x03\x02\x02\x02\xDA\xDC\x05\"\x12\x02\xDB\xDD" +
		"\x05<\x1F\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE3" +
		"\x03\x02\x02\x02\xDE\xE0\x05\"\x12\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x05<\x1F\x02\xE2\xDA" +
		"\x03\x02\x02\x02\xE2\xDF\x03\x02\x02\x02\xE3\x19\x03\x02\x02\x02\xE4\xE8" +
		"\x07E\x02\x02\xE5\xE8\x05&\x14\x02\xE6\xE8\x072\x02\x02\xE7\xE4\x03\x02" +
		"\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\x1B\x03\x02" +
		"\x02\x02\xE9\xEA\t\x02\x02\x02\xEA\x1D\x03\x02\x02\x02\xEB\xEC\x07E\x02" +
		"\x02\xEC\xED\x07/\x02\x02\xED\u0118\x05 \x11\x02\xEE\xEF\x07\x05\x02\x02" +
		"\xEF\xF4\x07E\x02\x02\xF0\xF1\x07\'\x02\x02\xF1\xF3\x07E\x02\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8" +
		"\x07\x06\x02\x02\xF8\xF9\x07/\x02\x02\xF9\u0118\x05 \x11\x02\xFA\xFB\x07" +
		"\t\x02\x02\xFB\u0100\x07E\x02\x02\xFC\xFD\x07\'\x02\x02\xFD\xFF\x07E\x02" +
		"\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02" +
		"\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102" +
		"\u0100\x03\x02\x02\x02\u0103\u0104\x07\n\x02\x02\u0104\u0105\x07/\x02" +
		"\x02\u0105\u0118\x05 \x11\x02\u0106\u0107\x072\x02\x02\u0107\u0108\x07" +
		"E\x02\x02\u0108\u0109\x07/\x02\x02\u0109\u0118\x05 \x11\x02\u010A\u010B" +
		"\x05 \x11\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010D\x07E\x02\x02\u010D" +
		"\u010E\x07/\x02\x02\u010E\u010F\x05 \x11\x02\u010F\u0118\x03\x02\x02\x02" +
		"\u0110\u0111\x05 \x11\x02\u0111\u0112\x07\x05\x02\x02\u0112\u0113\x05" +
		" \x11\x02\u0113\u0114\x07\x06\x02\x02\u0114\u0115\x07/\x02\x02\u0115\u0116" +
		"\x05 \x11\x02\u0116\u0118\x03\x02\x02\x02\u0117\xEB\x03\x02\x02\x02\u0117" +
		"\xEE\x03\x02\x02\x02\u0117\xFA\x03\x02\x02\x02\u0117\u0106\x03\x02\x02" +
		"\x02\u0117\u010A\x03\x02\x02\x02\u0117\u0110\x03\x02\x02\x02\u0118\x1F" +
		"\x03\x02\x02\x02\u0119\u011A\b\x11\x01\x02\u011A\u011C\t\x03\x02\x02\u011B" +
		"\u011D\x05:\x1E\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02" +
		"\x02\u011D\u013C\x03\x02\x02\x02\u011E\u013C\x072\x02\x02\u011F\u0120" +
		"\x072\x02\x02\u0120\u013C\x07E\x02\x02\u0121\u013C\x05$\x13\x02\u0122" +
		"\u0123\x07\x07\x02\x02\u0123\u0124\x05 \x11\x02\u0124\u0125\x07\b\x02" +
		"\x02\u0125\u013C\x03\x02\x02\x02\u0126\u012F\x07\x05\x02\x02\u0127\u012C" +
		"\x05 \x11\x02\u0128\u0129\x07\'\x02\x02\u0129\u012B\x05 \x11\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02" +
		"\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
		"\u012C\x03\x02\x02\x02\u012F\u0127\x03\x02\x02\x02\u012F\u0130\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u013C\x07\x06\x02\x02\u0132" +
		"\u0133\t\x04\x02\x02\u0133\u013C\x05 \x11\x0E\u0134\u0138\x07<\x02\x02" +
		"\u0135\u0136\x05.\x18\x02\u0136\u0137\x07(\x02\x02\u0137\u0139\x03\x02" +
		"\x02\x02\u0138\u0135\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
		"\u013A\x03\x02\x02\x02\u013A\u013C\x05 \x11\x03\u013B\u0119\x03\x02\x02" +
		"\x02\u013B\u011E\x03\x02\x02\x02\u013B\u011F\x03\x02\x02\x02\u013B\u0121" +
		"\x03\x02\x02\x02\u013B\u0122\x03\x02\x02\x02\u013B\u0126\x03\x02\x02\x02" +
		"\u013B\u0132\x03\x02\x02\x02\u013B\u0134\x03\x02\x02\x02\u013C\u0169\x03" +
		"\x02\x02\x02\u013D\u013E\f\r\x02\x02\u013E\u013F\x07-\x02\x02\u013F\u0168" +
		"\x05 \x11\x0E\u0140\u0141\f\f\x02\x02\u0141\u0142\t\x05\x02\x02\u0142" +
		"\u0168\x05 \x11\r\u0143\u0144\f\v\x02\x02\u0144\u0145\t\x06\x02\x02\u0145" +
		"\u0168\x05 \x11\f\u0146\u0147\f\n\x02\x02\u0147\u0148\x07 \x02\x02\u0148" +
		"\u0168\x05 \x11\v\u0149\u014A\f\t\x02\x02\u014A\u014B\x074\x02\x02\u014B" +
		"\u0168\x05 \x11\n\u014C\u014D\f\b\x02\x02\u014D\u014E\t\x07\x02\x02\u014E" +
		"\u0168\x05 \x11\t\u014F\u0150\f\x07\x02\x02\u0150\u0151\t\b\x02\x02\u0151" +
		"\u0168\x05 \x11\b\u0152\u0153\f\x06\x02\x02\u0153\u0154\x078\x02\x02\u0154" +
		"\u0168\x05 \x11\x07\u0155\u0156\f\x05\x02\x02\u0156\u0157\x079\x02\x02" +
		"\u0157\u0168\x05 \x11\x06\u0158\u0159\f\x04\x02\x02\u0159\u015A\x07$\x02" +
		"\x02\u015A\u015B\x07E\x02\x02\u015B\u015C\x07(\x02\x02\u015C\u0168\x05" +
		" \x11\x05\u015D\u015E\f\x13\x02\x02\u015E\u0168\x052\x1A\x02\u015F\u0160" +
		"\f\x12\x02\x02\u0160\u0168\x054\x1B\x02\u0161\u0162\f\x11\x02\x02\u0162" +
		"\u0163\t\t\x02\x02\u0163\u0165\x07E\x02\x02\u0164\u0166\x05:\x1E\x02\u0165" +
		"\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02" +
		"\x02\x02\u0167\u013D\x03\x02\x02\x02\u0167\u0140\x03\x02\x02\x02\u0167" +
		"\u0143\x03\x02\x02\x02\u0167\u0146\x03\x02\x02\x02\u0167\u0149\x03\x02" +
		"\x02\x02\u0167\u014C\x03\x02\x02\x02\u0167\u014F\x03\x02\x02\x02\u0167" +
		"\u0152\x03\x02\x02\x02\u0167\u0155\x03\x02\x02\x02\u0167\u0158\x03\x02" +
		"\x02\x02\u0167\u015D\x03\x02\x02\x02\u0167\u015F\x03\x02\x02\x02\u0167" +
		"\u0161\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02" +
		"\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A!\x03\x02\x02\x02\u016B\u0169" +
		"\x03\x02\x02\x02\u016C\u016D\b\x12\x01\x02\u016D\u016F\x07D\x02\x02\u016E" +
		"\u0170\x05:\x1E\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02" +
		"\x02\u0170\u0195\x03\x02\x02\x02\u0171\u0195\x05$\x13\x02\u0172\u0173" +
		"\x07\x07\x02\x02\u0173\u0174\x05\"\x12\x02\u0174\u0175\x077\x02\x02\u0175" +
		"\u0176\x05\"\x12\x02\u0176\u0177\x07\b\x02\x02\u0177\u0195\x03\x02\x02" +
		"\x02\u0178\u0179\x07\x07\x02\x02\u0179\u017A\x05\"\x12\x02\u017A\u017B" +
		"\x07$\x02\x02\u017B\u017C\x05\"\x12\x02\u017C\u017D\x07\b\x02\x02\u017D" +
		"\u0195\x03\x02\x02\x02\u017E\u0180\x05*\x16\x02\u017F\u0181\x05\"\x12" +
		"\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0195" +
		"\x03\x02\x02\x02\u0182\u0183\x07\x07\x02\x02\u0183\u0185\x05*\x16\x02" +
		"\u0184\u0186\x05\"\x12\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03" +
		"\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x07\b\x02\x02\u0188" +
		"\u0195\x03\x02\x02\x02\u0189\u018B\x05,\x17\x02\u018A\u018C\x05\"\x12" +
		"\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u0195" +
		"\x03\x02\x02\x02\u018D\u018E\x07\x07\x02\x02\u018E\u0190\x05,\x17\x02" +
		"\u018F\u0191\x05\"\x12\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03" +
		"\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x07\b\x02\x02\u0193" +
		"\u0195\x03\x02\x02\x02\u0194\u016C\x03\x02\x02\x02\u0194\u0171\x03\x02" +
		"\x02\x02\u0194\u0172\x03\x02\x02\x02\u0194\u0178\x03\x02\x02\x02\u0194" +
		"\u017E\x03\x02\x02\x02\u0194\u0182\x03\x02\x02\x02\u0194\u0189\x03\x02" +
		"\x02\x02\u0194\u018D\x03\x02\x02\x02\u0195\u01A6\x03\x02\x02\x02\u0196" +
		"\u0197\f\n\x02\x02\u0197\u0198\x077\x02\x02\u0198\u01A5\x05\"\x12\v\u0199" +
		"\u019A\f\b\x02\x02\u019A\u019B\x07$\x02\x02\u019B\u01A5\x05\"\x12\t\u019C" +
		"\u019D\f\f\x02\x02\u019D\u01A5\x074\x02\x02\u019E\u019F\f\v\x02\x02\u019F" +
		"\u01A1\x07\x05\x02\x02\u01A0\u01A2\x07?\x02\x02\u01A1\u01A0\x03\x02\x02" +
		"\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5" +
		"\x07\x06\x02\x02\u01A4\u0196\x03\x02\x02\x02\u01A4\u0199\x03\x02\x02\x02" +
		"\u01A4\u019C\x03\x02\x02\x02\u01A4\u019E\x03\x02\x02\x02\u01A5\u01A8\x03" +
		"\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
		"#\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01B0\x07=\x02\x02" +
		"\u01AA\u01B0\x07@\x02\x02\u01AB\u01B0\x07?\x02\x02\u01AC\u01B0\x07>\x02" +
		"\x02\u01AD\u01B0\x07A\x02\x02\u01AE\u01B0\x07B\x02\x02\u01AF\u01A9\x03" +
		"\x02\x02\x02\u01AF\u01AA\x03\x02\x02\x02\u01AF\u01AB\x03\x02\x02\x02\u01AF" +
		"\u01AC\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02" +
		"\x02\x02\u01B0%\x03\x02\x02\x02\u01B1\u01B2\t\n\x02\x02\u01B2\'\x03\x02" +
		"\x02\x02\u01B3\u01B5\x07E\x02\x02\u01B4\u01B6\x05\"\x12\x02\u01B5\u01B4" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02" +
		"\u01B7\u01B8\x07#\x02\x02\u01B8\u01BA\x07D\x02\x02\u01B9\u01B7\x03\x02" +
		"\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA)\x03\x02\x02\x02\u01BB\u01C4" +
		"\x07\x07\x02\x02\u01BC\u01C1\x05(\x15\x02\u01BD\u01BE\x07\'\x02\x02\u01BE" +
		"\u01C0\x05(\x15\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02" +
		"\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C5" +
		"\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01BC\x03\x02\x02\x02" +
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x07" +
		"\b\x02\x02\u01C7+\x03\x02\x02\x02\u01C8\u01D1\x07\x05\x02\x02\u01C9\u01CE" +
		"\x05(\x15\x02\u01CA\u01CB\x07\'\x02\x02\u01CB\u01CD\x05(\x15\x02\u01CC" +
		"\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02" +
		"\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0" +
		"\u01CE\x03\x02\x02\x02\u01D1\u01C9\x03\x02\x02\x02\u01D1\u01D2\x03\x02" +
		"\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4" +
		"-\x03\x02\x02\x02\u01D5\u01DA\x05(\x15\x02\u01D6\u01D7\x07\'\x02\x02\u01D7" +
		"\u01D9\x05(\x15\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02" +
		"\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB/\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x05 \x11\x02\u01DE" +
		"1\x03\x02\x02\x02\u01DF\u01E8\x07\x07\x02\x02\u01E0\u01E5\x050\x19\x02" +
		"\u01E1\u01E2\x07\'\x02\x02\u01E2\u01E4\x050\x19\x02\u01E3\u01E1\x03\x02" +
		"\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5" +
		"\u01E6\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02" +
		"\x02\x02\u01E8\u01E0\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
		"\u01EA\x03\x02\x02\x02\u01EA\u01EB\x07\b\x02\x02\u01EB3\x03\x02\x02\x02" +
		"\u01EC\u01F5\x07\x05\x02\x02\u01ED\u01F2\x050\x19\x02\u01EE\u01EF\x07" +
		"\'\x02\x02\u01EF\u01F1\x050\x19\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1" +
		"\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3\x03\x02" +
		"\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F5" +
		"\u01ED\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02" +
		"\x02\x02\u01F7\u01F8\x07\x06\x02\x02\u01F85\x03\x02\x02\x02\u01F9\u01FB" +
		"\x07!\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FD\x07D\x02\x02\u01FD7\x03\x02\x02" +
		"\x02\u01FE\u01FF\x07%\x02\x02\u01FF\u0204\x056\x1C\x02\u0200\u0201\x07" +
		"\'\x02\x02\u0201\u0203\x056\x1C\x02\u0202\u0200\x03\x02\x02\x02\u0203" +
		"\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02" +
		"\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207" +
		"\u0208\x07)\x02\x02\u02089\x03\x02\x02\x02\u0209\u0212\x07%\x02\x02\u020A" +
		"\u020F\x05\"\x12\x02\u020B\u020C\x07\'\x02\x02\u020C\u020E\x05\"\x12\x02" +
		"\u020D\u020B\x03\x02\x02\x02\u020E\u0211\x03\x02\x02\x02\u020F\u020D\x03" +
		"\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211" +
		"\u020F\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0212\u020A\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0214\x03\x02\x02\x02\u0214\u0215\x07)\x02\x02\u0215;\x03\x02\x02\x02" +
		"\u0216\u0225\x07(\x02\x02\u0217\u0226\x05\x16\f\x02\u0218\u021A\x07F\x02" +
		"\x02\u0219\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u0219" +
		"\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02" +
		"\u021D\u0220\x07\x03\x02\x02\u021E\u0221\x05\x16\f\x02\u021F\u0221\x07" +
		"F\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u021F\x03\x02\x02\x02\u0221" +
		"\u0222\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03\x02" +
		"\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x07\x04\x02\x02\u0225" +
		"\u0217\x03\x02\x02\x02\u0225\u0219\x03\x02\x02\x02\u0225\u0226\x03\x02" +
		"\x02\x02\u0226=\x03\x02\x02\x02JACHJO^afnry}\x80\x84\x87\x8B\x91\x96\x98" +
		"\x9B\xA3\xA6\xB9\xBE\xC5\xCE\xD3\xD8\xDC\xDF\xE2\xE7\xF4\u0100\u0117\u011C" +
		"\u012C\u012F\u0138\u013B\u0165\u0167\u0169\u016F\u0180\u0185\u018B\u0190" +
		"\u0194\u01A1\u01A4\u01A6\u01AF\u01B5\u01B9\u01C1\u01C4\u01CE\u01D1\u01DA" +
		"\u01E5\u01E8\u01F2\u01F5\u01FA\u0204\u020F\u0212\u021B\u0220\u0222\u0225";
	public static readonly _serializedATN: string = Utils.join(
		[
			XonParser._serializedATNSegment0,
			XonParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
		}
	}
	public export(): ExportContext[];
	public export(i: number): ExportContext;
	public export(i?: number): ExportContext | ExportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExportContext);
		} else {
			return this.getRuleContext(i, ExportContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public sourceMember(): SourceMemberContext[];
	public sourceMember(i: number): SourceMemberContext;
	public sourceMember(i?: number): SourceMemberContext | SourceMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceMemberContext);
		} else {
			return this.getRuleContext(i, SourceMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class SourceMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_sourceMember; }
	public copyFrom(ctx: SourceMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class DefinitionSourceMemberContext extends SourceMemberContext {
	public definition(): DefinitionContext {
		return this.getRuleContext(0, DefinitionContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TestSourceMemberContext extends SourceMemberContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	constructor(ctx: SourceMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExportContext extends ParserRuleContext {
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_export; }
}


export class LibraryContext extends ParserRuleContext {
	public _alias!: Token;
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
		}
	}
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class LibraryPathContext extends ParserRuleContext {
	public _s29!: Token;
	public _points: Token[] = [];
	public libraryPathPart(): LibraryPathPartContext[];
	public libraryPathPart(i: number): LibraryPathPartContext;
	public libraryPathPart(i?: number): LibraryPathPartContext | LibraryPathPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryPathPartContext);
		} else {
			return this.getRuleContext(i, LibraryPathPartContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPath; }
}


export class LibraryPathPartContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(XonParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPathPart; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: Token;
	public _alias!: Token;
	public UPPER_ID(): TerminalNode[];
	public UPPER_ID(i: number): TerminalNode;
	public UPPER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.UPPER_ID);
		} else {
			return this.getToken(XonParser.UPPER_ID, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class TestContext extends ParserRuleContext {
	public TEST(): TerminalNode { return this.getToken(XonParser.TEST, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_test; }
}


export class DefinitionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
	public copyFrom(ctx: DefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClassDefinitionContext extends DefinitionContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public functionParameters(): FunctionParametersContext | undefined {
		return this.tryGetRuleContext(0, FunctionParametersContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public classMember(): ClassMemberContext[];
	public classMember(i: number): ClassMemberContext;
	public classMember(i?: number): ClassMemberContext | ClassMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberContext);
		} else {
			return this.getRuleContext(i, ClassMemberContext);
		}
	}
	constructor(ctx: DefinitionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ClassMemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_classMember; }
	public copyFrom(ctx: ClassMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class AttributeClassMemberContext extends ClassMemberContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: Token;
	public _index!: Token;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XonParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DoWhileStatementContext extends StatementContext {
	public DO(): TerminalNode { return this.getToken(XonParser.DO, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExpressionContext;
	public _expect!: ExpressionContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AttributeStatementContext extends StatementContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public attributeModifier(): AttributeModifierContext[];
	public attributeModifier(i: number): AttributeModifierContext;
	public attributeModifier(i?: number): AttributeModifierContext | AttributeModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeModifierContext);
		} else {
			return this.getRuleContext(i, AttributeModifierContext);
		}
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attribute; }
}


export class AttributeNameContext extends ParserRuleContext {
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeName; }
}


export class AttributeModifierContext extends ParserRuleContext {
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_attributeModifier; }
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_assignment; }
	public copyFrom(ctx: AssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class IdAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayAssignmentContext extends AssignmentContext {
	public _LOWER_ID!: Token;
	public _names: Token[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectAssignmentContext extends AssignmentContext {
	public _LOWER_ID!: Token;
	public _names: Token[] = [];
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ThisMemberAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexAssignmentContext extends AssignmentContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public _name!: Token;
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceMemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public DOLLAR(): TerminalNode { return this.getToken(XonParser.DOLLAR, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CallExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getRuleContext(0, FunctionArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public indexArguments(): IndexArgumentsContext {
		return this.getRuleContext(0, IndexArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COALESCING(): TerminalNode | undefined { return this.tryGetToken(XonParser.COALESCING, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DOT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(XonParser.CARET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RANGE(): TerminalNode { return this.getToken(XonParser.RANGE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ElvisExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_EQUAL, 0); }
	public GREAT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT_EQUAL, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public BACK_SLASH(): TerminalNode { return this.getToken(XonParser.BACK_SLASH, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public lambdaParameters(): LambdaParametersContext | undefined {
		return this.tryGetRuleContext(0, LambdaParametersContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class IdTypeContext extends TypeContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralTypeContext extends TypeContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends TypeContext {
	public _size!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntersectionTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(XonParser.AMPERSAND, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntersectionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(XonParser.AMPERSAND, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnionTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexTypeContext extends TypeContext {
	public indexParameters(): IndexParametersContext {
		return this.getRuleContext(0, IndexParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public indexParameters(): IndexParametersContext {
		return this.getRuleContext(0, IndexParametersContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends LiteralContext {
	public NULL_LITERAL(): TerminalNode { return this.getToken(XonParser.NULL_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(XonParser.BOOLEAN_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharLiteralContext extends LiteralContext {
	public CHAR_LITERAL(): TerminalNode { return this.getToken(XonParser.CHAR_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(XonParser.RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class FunctionParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_functionParameters; }
}


export class IndexParametersContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_indexParameters; }
}


export class LambdaParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_lambdaParameters; }
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class FunctionArgumentsContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_functionArguments; }
}


export class IndexArgumentsContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_indexArguments; }
}


export class GenericParameterContext extends ParserRuleContext {
	public _name!: Token;
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_genericParameter; }
}


export class GenericParametersContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public genericParameter(): GenericParameterContext[];
	public genericParameter(i: number): GenericParameterContext;
	public genericParameter(i?: number): GenericParameterContext | GenericParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericParameterContext);
		} else {
			return this.getRuleContext(i, GenericParameterContext);
		}
	}
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_genericParameters; }
}


export class GenericArgumentsContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_genericArguments; }
}


export class BodyContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


