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
	public static readonly INIT = 16;
	public static readonly TEST = 17;
	public static readonly BREAK = 18;
	public static readonly INFIX = 19;
	public static readonly WHILE = 20;
	public static readonly ACTUAL = 21;
	public static readonly EXPECT = 22;
	public static readonly EXPORT = 23;
	public static readonly IMPORT = 24;
	public static readonly PREFIX = 25;
	public static readonly RETURN = 26;
	public static readonly POSTFIX = 27;
	public static readonly EXTENSION = 28;
	public static readonly AT = 29;
	public static readonly DOT = 30;
	public static readonly PLUS = 31;
	public static readonly HASH = 32;
	public static readonly PIPE = 33;
	public static readonly LESS = 34;
	public static readonly COMMA = 35;
	public static readonly COLON = 36;
	public static readonly GREAT = 37;
	public static readonly MINUS = 38;
	public static readonly SLASH = 39;
	public static readonly CARET = 40;
	public static readonly TILDE = 41;
	public static readonly EQUAL = 42;
	public static readonly DOLLAR = 43;
	public static readonly MODULO = 44;
	public static readonly QUESTION = 45;
	public static readonly ASTERISK = 46;
	public static readonly AMPERSAND = 47;
	public static readonly UNDERSCORE = 48;
	public static readonly EXCLAMATION = 49;
	public static readonly BACK_SLASH = 50;
	public static readonly NULL_LITERAL = 51;
	public static readonly FLOAT_LITERAL = 52;
	public static readonly INTEGER_LITERAL = 53;
	public static readonly BOOLEAN_LITERAL = 54;
	public static readonly CHAR_LITERAL = 55;
	public static readonly STRING_LITERAL = 56;
	public static readonly PREPROCESSOR = 57;
	public static readonly UPPER_ID = 58;
	public static readonly LOWER_ID = 59;
	public static readonly NL = 60;
	public static readonly WS = 61;
	public static readonly COMMENT = 62;
	public static readonly RULE_source = 0;
	public static readonly RULE_sourceMember = 1;
	public static readonly RULE_export = 2;
	public static readonly RULE_library = 3;
	public static readonly RULE_libraryPath = 4;
	public static readonly RULE_libraryPathPart = 5;
	public static readonly RULE_libraryMember = 6;
	public static readonly RULE_definition = 7;
	public static readonly RULE_classMember = 8;
	public static readonly RULE_test = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_operator = 15;
	public static readonly RULE_id = 16;
	public static readonly RULE_parameter = 17;
	public static readonly RULE_parameters = 18;
	public static readonly RULE_argument = 19;
	public static readonly RULE_arguments = 20;
	public static readonly RULE_genericArguments = 21;
	public static readonly RULE_genericParameters = 22;
	public static readonly RULE_body = 23;
	public static readonly RULE_methodBody = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "sourceMember", "export", "library", "libraryPath", "libraryPathPart", 
		"libraryMember", "definition", "classMember", "test", "statement", "assignment", 
		"expression", "type", "literal", "operator", "id", "parameter", "parameters", 
		"argument", "arguments", "genericArguments", "genericParameters", "body", 
		"methodBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'init'", "'test'", 
		"'break'", "'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'extension'", "'@'", "'.'", "'+'", 
		"'#'", "'|'", "'<'", "','", "':'", "'>'", "'-'", "'/'", "'^'", "'~'", 
		"'='", "'$'", "'%'", "'?'", "'*'", "'&'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "INIT", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "EXTENSION", "AT", 
		"DOT", "PLUS", "HASH", "PIPE", "LESS", "COMMA", "COLON", "GREAT", "MINUS", 
		"SLASH", "CARET", "TILDE", "EQUAL", "DOLLAR", "MODULO", "QUESTION", "ASTERISK", 
		"AMPERSAND", "UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "UPPER_ID", "LOWER_ID", "NL", "WS", 
		"COMMENT",
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
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 53;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 50;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 51;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 52;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.TEST || _la === XonParser.UPPER_ID || _la === XonParser.NL) {
				{
				this.state = 60;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.TEST:
				case XonParser.UPPER_ID:
					{
					this.state = 58;
					this.sourceMember();
					}
					break;
				case XonParser.NL:
					{
					this.state = 59;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 64;
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
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.UPPER_ID:
				_localctx = new DefinitionSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.definition();
				}
				break;
			case XonParser.TEST:
				_localctx = new TestSourceMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
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
			this.state = 69;
			this.match(XonParser.EXPORT);
			this.state = 70;
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
			this.state = 72;
			this.match(XonParser.IMPORT);
			this.state = 73;
			this.libraryPath();
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 74;
				this.match(XonParser.AS);
				this.state = 75;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 76;
				this.match(XonParser.COLON);
				this.state = 77;
				this.libraryMember();
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 78;
					this.match(XonParser.COMMA);
					this.state = 79;
					this.libraryMember();
					}
					}
					this.state = 84;
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
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 87;
				_localctx._s30 = this.match(XonParser.DOT);
				_localctx._points.push(_localctx._s30);
				}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 93;
			this.libraryPathPart();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 94;
				this.match(XonParser.DOT);
				this.state = 95;
				this.libraryPathPart();
				}
				}
				this.state = 100;
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
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AT) {
				{
				this.state = 101;
				this.match(XonParser.AT);
				}
			}

			this.state = 104;
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
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				_localctx._name = this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				_localctx._name = this.id();
				this.state = 108;
				this.match(XonParser.AS);
				this.state = 109;
				_localctx._alias = this.id();
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_definition);
		let _la: number;
		try {
			_localctx = new ClassDefinitionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			(_localctx as ClassDefinitionContext)._name = this.match(XonParser.UPPER_ID);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 114;
				this.genericParameters();
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 117;
				this.parameters();
				}
			}

			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 120;
				this.match(XonParser.IS);
				this.state = 121;
				this.type(0);
				}
			}

			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 124;
				this.match(XonParser.COLON);
				this.state = 125;
				this.match(XonParser.NL);
				this.state = 126;
				this.match(XonParser.INDENT);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 129;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.INIT:
					case XonParser.INFIX:
					case XonParser.PREFIX:
					case XonParser.POSTFIX:
					case XonParser.DOT:
					case XonParser.LOWER_ID:
						{
						this.state = 127;
						this.classMember();
						}
						break;
					case XonParser.NL:
						{
						this.state = 128;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX) | (1 << XonParser.DOT))) !== 0) || _la === XonParser.LOWER_ID || _la === XonParser.NL);
				this.state = 133;
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
		this.enterRule(_localctx, 16, XonParser.RULE_classMember);
		let _la: number;
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				_localctx = new IncludeClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.match(XonParser.DOT);
				this.state = 137;
				this.match(XonParser.DOT);
				this.state = 138;
				this.match(XonParser.DOT);
				this.state = 139;
				(_localctx as IncludeClassMemberContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 140;
				this.arguments();
				}
				break;

			case 2:
				_localctx = new InitClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.match(XonParser.INIT);
				this.state = 142;
				this.body();
				}
				break;

			case 3:
				_localctx = new PropertyClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 143;
				(_localctx as PropertyClassMemberContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 144;
					this.type(0);
					}
				}

				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON || _la === XonParser.EQUAL) {
					{
					this.state = 147;
					_la = this._input.LA(1);
					if (!(_la === XonParser.COLON || _la === XonParser.EQUAL)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 148;
					this.expression(0);
					}
				}

				}
				break;

			case 4:
				_localctx = new MethodClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 151;
				(_localctx as MethodClassMemberContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 152;
					this.genericParameters();
					}
				}

				this.state = 155;
				this.parameters();
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 156;
					this.type(0);
					}
				}

				this.state = 160;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.methodBody();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new OperatorClassMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 162;
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
				this.state = 163;
				(_localctx as OperatorClassMemberContext)._name = this.operator();
				this.state = 164;
				this.parameters();
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 165;
					this.type(0);
					}
				}

				this.state = 169;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 168;
					this.methodBody();
					}
					break;
				}
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(XonParser.TEST);
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.expression(0);
				}
				break;
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 177;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				_localctx = new VariableDeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				(_localctx as VariableDeclarationStatementContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
					{
					this.state = 181;
					this.type(0);
					}
				}

				this.state = 184;
				this.match(XonParser.COLON);
				this.state = 185;
				this.match(XonParser.EQUAL);
				this.state = 186;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.match(XonParser.FOR);
				this.state = 194;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 188;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 189;
						this.match(XonParser.COMMA);
						this.state = 190;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 193;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 196;
				this.expression(0);
				this.state = 197;
				this.body();
				}
				break;

			case 3:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 199;
				this.match(XonParser.WHILE);
				this.state = 200;
				this.expression(0);
				this.state = 201;
				this.body();
				}
				break;

			case 4:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 203;
				this.match(XonParser.DO);
				this.state = 204;
				this.body();
				this.state = 205;
				this.match(XonParser.WHILE);
				this.state = 206;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 208;
				this.match(XonParser.IF);
				this.state = 209;
				this.expression(0);
				this.state = 210;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 213;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 211;
					this.match(XonParser.ELSE);
					this.state = 212;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 215;
				this.match(XonParser.BREAK);
				}
				break;

			case 7:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 216;
				this.match(XonParser.RETURN);
				this.state = 218;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 217;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 220;
				this.match(XonParser.ACTUAL);
				this.state = 221;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 222;
					this.match(XonParser.NL);
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 227;
				this.match(XonParser.EXPECT);
				this.state = 228;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 9:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 230;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 10:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 231;
				this.assignment();
				}
				break;

			case 11:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 232;
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
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_assignment);
		let _la: number;
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 236;
				this.match(XonParser.EQUAL);
				this.state = 237;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 239;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 240;
					this.match(XonParser.COMMA);
					this.state = 241;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 247;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 248;
				this.match(XonParser.EQUAL);
				this.state = 249;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.match(XonParser.OPEN_BRACE);
				this.state = 251;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 252;
					this.match(XonParser.COMMA);
					this.state = 253;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 259;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 260;
				this.match(XonParser.EQUAL);
				this.state = 261;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(XonParser.DOLLAR);
				this.state = 263;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 264;
				this.match(XonParser.EQUAL);
				this.state = 265;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 266;
				this.expression(0);
				this.state = 267;
				this.match(XonParser.DOT);
				this.state = 268;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 269;
				this.match(XonParser.EQUAL);
				this.state = 270;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 272;
				this.expression(0);
				this.state = 273;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 274;
				this.expression(0);
				this.state = 275;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 276;
				this.match(XonParser.EQUAL);
				this.state = 277;
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 282;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 283;
				(_localctx as InstanceExpressionContext)._name = this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.match(XonParser.DOLLAR);
				this.state = 285;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new InstantiationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				(_localctx as InstantiationExpressionContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 287;
					this.genericArguments();
					}
				}

				this.state = 290;
				this.arguments();
				}
				break;

			case 5:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 291;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.match(XonParser.OPEN_PAREN);
				this.state = 293;
				this.expression(0);
				this.state = 294;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 7:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 296;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
					{
					this.state = 297;
					this.expression(0);
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 298;
						this.match(XonParser.COMMA);
						this.state = 299;
						this.expression(0);
						}
						}
						this.state = 304;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 307;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 8:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 308;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (XonParser.PLUS - 31)) | (1 << (XonParser.MINUS - 31)) | (1 << (XonParser.EXCLAMATION - 31)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 309;
				this.expression(12);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 310;
				this.match(XonParser.BACK_SLASH);
				this.state = 321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 311;
					this.parameter();
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 312;
						this.match(XonParser.COMMA);
						this.state = 313;
						this.parameter();
						}
						}
						this.state = 318;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 319;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 323;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 383;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 381;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 326;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 327;
						(_localctx as PowExpressionContext)._s40 = this.match(XonParser.CARET);
						(_localctx as PowExpressionContext)._op.push((_localctx as PowExpressionContext)._s40);
						this.state = 328;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 330;
						(_localctx as MulDivModExpressionContext).__tset303 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.SLASH - 39)) | (1 << (XonParser.MODULO - 39)) | (1 << (XonParser.ASTERISK - 39)))) !== 0))) {
							(_localctx as MulDivModExpressionContext).__tset303 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as MulDivModExpressionContext)._op.push((_localctx as MulDivModExpressionContext).__tset303);
						this.state = 331;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 332;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 333;
						(_localctx as AddSubExpressionContext).__tset358 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext).__tset358 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as AddSubExpressionContext)._op.push((_localctx as AddSubExpressionContext).__tset358);
						this.state = 334;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 336;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 337;
						(_localctx as RangeExpressionContext)._s30 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s30);
						this.state = 338;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 339;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 340;
						(_localctx as ElvisExpressionContext)._s45 = this.match(XonParser.QUESTION);
						(_localctx as ElvisExpressionContext)._op.push((_localctx as ElvisExpressionContext)._s45);
						this.state = 341;
						(_localctx as ElvisExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 343;
						(_localctx as RelationalExpressionContext).__tset485 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
							(_localctx as RelationalExpressionContext).__tset485 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext).__tset485);
						this.state = 345;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.EQUAL) {
							{
							this.state = 344;
							(_localctx as RelationalExpressionContext)._s42 = this.match(XonParser.EQUAL);
							(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext)._s42);
							}
						}

						this.state = 347;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 348;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 349;
						(_localctx as EqualityExpressionContext).__tset543 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.EXCLAMATION)) {
							(_localctx as EqualityExpressionContext).__tset543 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext).__tset543);
						this.state = 350;
						(_localctx as EqualityExpressionContext)._s42 = this.match(XonParser.EQUAL);
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext)._s42);
						this.state = 351;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 352;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 353;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 354;
						(_localctx as ConjunctionExpressionContext)._s47 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s47);
						this.state = 355;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 356;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 357;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 358;
						(_localctx as DisjunctionExpressionContext)._s33 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s33);
						this.state = 359;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 360;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 361;
						this.match(XonParser.PIPE);
						this.state = 362;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 363;
						this.match(XonParser.COLON);
						this.state = 364;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 365;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 367;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 366;
							this.genericArguments();
							}
						}

						this.state = 369;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 370;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 371;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 372;
						this.expression(0);
						this.state = 373;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 377;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 376;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 379;
						this.match(XonParser.DOT);
						this.state = 380;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						}
						break;
					}
					}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				_localctx = new IdTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 387;
				(_localctx as IdTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 389;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 388;
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
				this.state = 391;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 392;
					this.genericParameters();
					}
				}

				this.state = 395;
				this.parameters();
				this.state = 397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.type(0);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 399;
				this.match(XonParser.OPEN_PAREN);
				this.state = 400;
				this.type(0);
				this.state = 401;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 419;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 405;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 406;
						this.match(XonParser.AMPERSAND);
						this.state = 407;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 408;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 409;
						this.match(XonParser.PIPE);
						this.state = 410;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 411;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 412;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 413;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 414;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 416;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.INTEGER_LITERAL) {
							{
							this.state = 415;
							(_localctx as ArrayTypeContext)._size = this.match(XonParser.INTEGER_LITERAL);
							}
						}

						this.state = 418;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 28, XonParser.RULE_literal);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 424;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 426;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 427;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 428;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 429;
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
		this.enterRule(_localctx, 30, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 432;
				_la = this._input.LA(1);
				if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.DOT - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.PIPE - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.TILDE - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AMPERSAND - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0))) {
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
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.DOT - 30)) | (1 << (XonParser.PLUS - 30)) | (1 << (XonParser.PIPE - 30)) | (1 << (XonParser.LESS - 30)) | (1 << (XonParser.GREAT - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.SLASH - 30)) | (1 << (XonParser.CARET - 30)) | (1 << (XonParser.TILDE - 30)) | (1 << (XonParser.EQUAL - 30)) | (1 << (XonParser.MODULO - 30)) | (1 << (XonParser.ASTERISK - 30)) | (1 << (XonParser.AMPERSAND - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0));
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XonParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			_la = this._input.LA(1);
			if (!(_la === XonParser.UPPER_ID || _la === XonParser.LOWER_ID)) {
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
		this.enterRule(_localctx, 34, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 440;
			this.type(0);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 441;
				this.match(XonParser.HASH);
				this.state = 442;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XonParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(XonParser.OPEN_PAREN);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 446;
				this.parameter();
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 447;
					this.match(XonParser.COMMA);
					this.state = 448;
					this.parameter();
					}
					}
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 456;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 458;
				_localctx._name = this.match(XonParser.LOWER_ID);
				this.state = 459;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 462;
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XonParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(XonParser.OPEN_PAREN);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)))) !== 0)) {
				{
				this.state = 465;
				this.argument();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 466;
					this.match(XonParser.COMMA);
					this.state = 467;
					this.argument();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 475;
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
	public genericArguments(): GenericArgumentsContext {
		let _localctx: GenericArgumentsContext = new GenericArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(XonParser.LESS);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LESS - 34)) | (1 << (XonParser.NULL_LITERAL - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)) | (1 << (XonParser.INTEGER_LITERAL - 34)) | (1 << (XonParser.BOOLEAN_LITERAL - 34)) | (1 << (XonParser.CHAR_LITERAL - 34)) | (1 << (XonParser.STRING_LITERAL - 34)) | (1 << (XonParser.UPPER_ID - 34)))) !== 0)) {
				{
				this.state = 478;
				this.type(0);
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 479;
					this.match(XonParser.COMMA);
					this.state = 480;
					this.type(0);
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 488;
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
	public genericParameters(): GenericParametersContext {
		let _localctx: GenericParametersContext = new GenericParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(XonParser.LESS);
			this.state = 491;
			_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
			_localctx._names.push(_localctx._UPPER_ID);
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 492;
				this.match(XonParser.COMMA);
				this.state = 493;
				_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
				_localctx._names.push(_localctx._UPPER_ID);
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 499;
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
		this.enterRule(_localctx, 46, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.match(XonParser.COLON);
				this.state = 503;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 502;
					this.statement();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.match(XonParser.COLON);
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 506;
					this.match(XonParser.NL);
					}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 512;
				this.match(XonParser.INDENT);
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.MINUS - 38)) | (1 << (XonParser.DOLLAR - 38)) | (1 << (XonParser.EXCLAMATION - 38)) | (1 << (XonParser.BACK_SLASH - 38)) | (1 << (XonParser.NULL_LITERAL - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.BOOLEAN_LITERAL - 38)) | (1 << (XonParser.CHAR_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)) | (1 << (XonParser.PREPROCESSOR - 38)) | (1 << (XonParser.UPPER_ID - 38)) | (1 << (XonParser.LOWER_ID - 38)) | (1 << (XonParser.NL - 38)))) !== 0)) {
					{
					this.state = 515;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.DO:
					case XonParser.IF:
					case XonParser.FOR:
					case XonParser.BREAK:
					case XonParser.WHILE:
					case XonParser.ACTUAL:
					case XonParser.RETURN:
					case XonParser.PLUS:
					case XonParser.MINUS:
					case XonParser.DOLLAR:
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
						this.state = 513;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 514;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 520;
				this.match(XonParser.DEDENT);
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
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XonParser.RULE_methodBody);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 523;
					this.match(XonParser.NL);
					}
					}
					this.state = 528;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 529;
				this.match(XonParser.EQUAL);
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 530;
					this.match(XonParser.NL);
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 536;
				this.statement();
				}
				break;
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 537;
				this.body();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 13:
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
			return this.precpred(this._ctx, 13);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);

		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 6);

		case 16:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u021F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x07\x02" +
		"8\n\x02\f\x02\x0E\x02;\v\x02\x03\x02\x03\x02\x07\x02?\n\x02\f\x02\x0E" +
		"\x02B\v\x02\x03\x03\x03\x03\x05\x03F\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05S" +
		"\n\x05\f\x05\x0E\x05V\v\x05\x05\x05X\n\x05\x03\x06\x07\x06[\n\x06\f\x06" +
		"\x0E\x06^\v\x06\x03\x06\x03\x06\x03\x06\x07\x06c\n\x06\f\x06\x0E\x06f" +
		"\v\x06\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x05\br\n\b\x03\t\x03\t\x05\tv\n\t\x03\t\x05\ty\n\t\x03\t\x03\t" +
		"\x05\t}\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\x84\n\t\r\t\x0E\t\x85" +
		"\x03\t\x05\t\x89\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\x94\n\n\x03\n\x03\n\x05\n\x98\n\n\x03\n\x03\n\x05\n\x9C\n\n\x03" +
		"\n\x03\n\x05\n\xA0\n\n\x03\n\x05\n\xA3\n\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\xA9\n\n\x03\n\x05\n\xAC\n\n\x05\n\xAE\n\n\x03\v\x03\v\x05\v\xB2\n\v" +
		"\x03\v\x05\v\xB5\n\v\x03\f\x03\f\x05\f\xB9\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x05\f\xC2\n\f\x03\f\x05\f\xC5\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xD8\n\f\x03\f\x03\f\x03\f\x05\f\xDD\n\f\x03\f\x03" +
		"\f\x03\f\x06\f\xE2\n\f\r\f\x0E\f\xE3\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\xEC\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xF5\n" +
		"\r\f\r\x0E\r\xF8\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0101" +
		"\n\r\f\r\x0E\r\u0104\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u011A\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0123\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u012F\n\x0E\f\x0E\x0E\x0E\u0132" +
		"\v\x0E\x05\x0E\u0134\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u013D\n\x0E\f\x0E\x0E\x0E\u0140\v\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0144\n\x0E\x03\x0E\x05\x0E\u0147\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u015C" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0172\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u017C\n\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u0180\n\x0E\f\x0E\x0E\x0E\u0183\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0188\n\x0F\x03\x0F\x03\x0F\x05\x0F\u018C\n\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0190\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0196\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u01A3\n\x0F\x03\x0F\x07\x0F\u01A6\n\x0F\f\x0F" +
		"\x0E\x0F\u01A9\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u01B1\n\x10\x03\x11\x06\x11\u01B4\n\x11\r\x11\x0E\x11\u01B5\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01BE\n\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u01C4\n\x14\f\x14\x0E\x14\u01C7\v\x14\x05" +
		"\x14\u01C9\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01CF\n\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01D7\n\x16\f\x16" +
		"\x0E\x16\u01DA\v\x16\x05\x16\u01DC\n\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x07\x17\u01E4\n\x17\f\x17\x0E\x17\u01E7\v\x17\x05\x17" +
		"\u01E9\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01F1" +
		"\n\x18\f\x18\x0E\x18\u01F4\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19" +
		"\u01FA\n\x19\x03\x19\x03\x19\x07\x19\u01FE\n\x19\f\x19\x0E\x19\u0201\v" +
		"\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0206\n\x19\f\x19\x0E\x19\u0209\v" +
		"\x19\x03\x19\x05\x19\u020C\n\x19\x03\x1A\x07\x1A\u020F\n\x1A\f\x1A\x0E" +
		"\x1A\u0212\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0216\n\x1A\f\x1A\x0E\x1A\u0219" +
		"\v\x1A\x03\x1A\x03\x1A\x05\x1A\u021D\n\x1A\x03\x1A\x02\x02\x04\x1A\x1C" +
		"\x1B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x02\x02\v\x04\x02&&,,\x05\x02\x15\x15\x1B\x1B" +
		"\x1D\x1D\x05\x02!!((33\x05\x02))..00\x04\x02!!((\x04\x02$$\'\'\x04\x02" +
		",,33\b\x02 !#$\',..0133\x03\x02<=\x02\u027B\x029\x03\x02\x02\x02\x04E" +
		"\x03\x02\x02\x02\x06G\x03\x02\x02\x02\bJ\x03\x02\x02\x02\n\\\x03\x02\x02" +
		"\x02\fh\x03\x02\x02\x02\x0Eq\x03\x02\x02\x02\x10s\x03\x02\x02\x02\x12" +
		"\xAD\x03\x02\x02\x02\x14\xAF\x03\x02\x02\x02\x16\xEB\x03\x02\x02\x02\x18" +
		"\u0119\x03\x02\x02\x02\x1A\u0146\x03\x02\x02\x02\x1C\u0195\x03\x02\x02" +
		"\x02\x1E\u01B0\x03\x02\x02\x02 \u01B3\x03\x02\x02\x02\"\u01B7\x03\x02" +
		"\x02\x02$\u01B9\x03\x02\x02\x02&\u01BF\x03\x02\x02\x02(\u01CE\x03\x02" +
		"\x02\x02*\u01D2\x03\x02\x02\x02,\u01DF\x03\x02\x02\x02.\u01EC\x03\x02" +
		"\x02\x020\u020B\x03\x02\x02\x022\u021C\x03\x02\x02\x0248\x05\b\x05\x02" +
		"58\x05\x06\x04\x0268\x07>\x02\x0274\x03\x02\x02\x0275\x03\x02\x02\x02" +
		"76\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":@\x03\x02\x02\x02;9\x03\x02\x02\x02<?\x05\x04\x03\x02=?\x07>\x02\x02" +
		"><\x03\x02\x02\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02A\x03\x03\x02\x02\x02B@\x03\x02\x02\x02CF\x05\x10\t" +
		"\x02DF\x05\x14\v\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x05\x03\x02" +
		"\x02\x02GH\x07\x19\x02\x02HI\x05\n\x06\x02I\x07\x03\x02\x02\x02JK\x07" +
		"\x1A\x02\x02KW\x05\n\x06\x02LM\x07\f\x02\x02MX\x07=\x02\x02NO\x07&\x02" +
		"\x02OT\x05\x0E\b\x02PQ\x07%\x02\x02QS\x05\x0E\b\x02RP\x03\x02\x02\x02" +
		"SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02WL\x03\x02\x02\x02WN\x03\x02\x02\x02WX\x03\x02\x02\x02" +
		"X\t\x03\x02\x02\x02Y[\x07 \x02\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02_d\x05\f\x07\x02`a\x07 \x02\x02ac\x05\f\x07\x02b`\x03\x02\x02\x02" +
		"cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\v\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02gi\x07\x1F\x02\x02hg\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02ij\x03\x02\x02\x02jk\x07=\x02\x02k\r\x03\x02\x02\x02lr\x05\"\x12\x02" +
		"mn\x05\"\x12\x02no\x07\f\x02\x02op\x05\"\x12\x02pr\x03\x02\x02\x02ql\x03" +
		"\x02\x02\x02qm\x03\x02\x02\x02r\x0F\x03\x02\x02\x02su\x07<\x02\x02tv\x05" +
		".\x18\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wy\x05" +
		"&\x14\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y|\x03\x02\x02\x02z{\x07" +
		"\v\x02\x02{}\x05\x1C\x0F\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x88" +
		"\x03\x02\x02\x02~\x7F\x07&\x02\x02\x7F\x80\x07>\x02\x02\x80\x83\x07\x03" +
		"\x02\x02\x81\x84\x05\x12\n\x02\x82\x84\x07>\x02\x02\x83\x81\x03\x02\x02" +
		"\x02\x83\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x83\x03\x02\x02" +
		"\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x07\x04\x02" +
		"\x02\x88~\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x11\x03\x02\x02" +
		"\x02\x8A\x8B\x07 \x02\x02\x8B\x8C\x07 \x02\x02\x8C\x8D\x07 \x02\x02\x8D" +
		"\x8E\x07<\x02\x02\x8E\xAE\x05*\x16\x02\x8F\x90\x07\x12\x02\x02\x90\xAE" +
		"\x050\x19\x02\x91\x93\x07=\x02\x02\x92\x94\x05\x1C\x0F\x02\x93\x92\x03" +
		"\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x96\t" +
		"\x02\x02\x02\x96\x98\x05\x1A\x0E\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03" +
		"\x02\x02\x02\x98\xAE\x03\x02\x02\x02\x99\x9B\x07=\x02\x02\x9A\x9C\x05" +
		".\x18\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03" +
		"\x02\x02\x02\x9D\x9F\x05&\x14\x02\x9E\xA0\x05\x1C\x0F\x02\x9F\x9E\x03" +
		"\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\xA3\x05" +
		"2\x1A\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xAE\x03" +
		"\x02\x02\x02\xA4\xA5\t\x03\x02\x02\xA5\xA6\x05 \x11\x02\xA6\xA8\x05&\x14" +
		"\x02\xA7\xA9\x05\x1C\x0F\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02" +
		"\x02\xA9\xAB\x03\x02\x02\x02\xAA\xAC\x052\x1A\x02\xAB\xAA\x03\x02\x02" +
		"\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\x8A\x03\x02\x02" +
		"\x02\xAD\x8F\x03\x02\x02\x02\xAD\x91\x03\x02\x02\x02\xAD\x99\x03\x02\x02" +
		"\x02\xAD\xA4\x03\x02\x02\x02\xAE\x13\x03\x02\x02\x02\xAF\xB1\x07\x13\x02" +
		"\x02\xB0\xB2\x05\x1A\x0E\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02" +
		"\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB5\x050\x19\x02\xB4\xB3\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\x15\x03\x02\x02\x02\xB6\xB8\x07=\x02" +
		"\x02\xB7\xB9\x05\x1C\x0F\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07&\x02\x02\xBB\xBC\x07,\x02\x02" +
		"\xBC\xEC\x05\x1A\x0E\x02\xBD\xC4\x07\x10\x02\x02\xBE\xC1\x07=\x02\x02" +
		"\xBF\xC0\x07%\x02\x02\xC0\xC2\x07=\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1" +
		"\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x07\x0F\x02\x02\xC4" +
		"\xBE\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6" +
		"\xC7\x05\x1A\x0E\x02\xC7\xC8\x050\x19\x02\xC8\xEC\x03\x02\x02\x02\xC9" +
		"\xCA\x07\x16\x02\x02\xCA\xCB\x05\x1A\x0E\x02\xCB\xCC\x050\x19\x02\xCC" +
		"\xEC\x03\x02\x02\x02\xCD\xCE\x07\r\x02\x02\xCE\xCF\x050\x19\x02\xCF\xD0" +
		"\x07\x16\x02\x02\xD0\xD1\x05\x1A\x0E\x02\xD1\xEC\x03\x02\x02\x02\xD2\xD3" +
		"\x07\x0E\x02\x02\xD3\xD4\x05\x1A\x0E\x02\xD4\xD7\x050\x19\x02\xD5\xD6" +
		"\x07\x11\x02\x02\xD6\xD8\x050\x19\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xEC\x03\x02\x02\x02\xD9\xEC\x07\x14\x02\x02\xDA\xDC" +
		"\x07\x1C\x02\x02\xDB\xDD\x05\x1A\x0E\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD" +
		"\x03\x02\x02\x02\xDD\xEC\x03\x02\x02\x02\xDE\xDF\x07\x17\x02\x02\xDF\xE1" +
		"\x05\x1A\x0E\x02\xE0\xE2\x07>\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE3" +
		"\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5" +
		"\x03\x02\x02\x02\xE5\xE6\x07\x18\x02\x02\xE6\xE7\x05\x1A\x0E\x02\xE7\xEC" +
		"\x03\x02\x02\x02\xE8\xEC\x07;\x02\x02\xE9\xEC\x05\x18\r\x02\xEA\xEC\x05" +
		"\x1A\x0E\x02\xEB\xB6\x03\x02\x02\x02\xEB\xBD\x03\x02\x02\x02\xEB\xC9\x03" +
		"\x02\x02\x02\xEB\xCD\x03\x02\x02\x02\xEB\xD2\x03\x02\x02\x02\xEB\xD9\x03" +
		"\x02\x02\x02\xEB\xDA\x03\x02\x02\x02\xEB\xDE\x03\x02\x02\x02\xEB\xE8\x03" +
		"\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC\x17\x03" +
		"\x02\x02\x02\xED\xEE\x07=\x02\x02\xEE\xEF\x07,\x02\x02\xEF\u011A\x05\x1A" +
		"\x0E\x02\xF0\xF1\x07\x05\x02\x02\xF1\xF6\x07=\x02\x02\xF2\xF3\x07%\x02" +
		"\x02\xF3\xF5\x07=\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x03\x02\x02" +
		"\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02" +
		"\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFA\x07\x06\x02\x02\xFA\xFB\x07,\x02" +
		"\x02\xFB\u011A\x05\x1A\x0E\x02\xFC\xFD\x07\t\x02\x02\xFD\u0102\x07=\x02" +
		"\x02\xFE\xFF\x07%\x02\x02\xFF\u0101\x07=\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103" +
		"\x03\x02\x02\x02\u0103\u0105\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02" +
		"\u0105\u0106\x07\n\x02\x02\u0106\u0107\x07,\x02\x02\u0107\u011A\x05\x1A" +
		"\x0E\x02\u0108\u0109\x07-\x02\x02\u0109\u010A\x07=\x02\x02\u010A\u010B" +
		"\x07,\x02\x02\u010B\u011A\x05\x1A\x0E\x02\u010C\u010D\x05\x1A\x0E\x02" +
		"\u010D\u010E\x07 \x02\x02\u010E\u010F\x07=\x02\x02\u010F\u0110\x07,\x02" +
		"\x02\u0110\u0111\x05\x1A\x0E\x02\u0111\u011A\x03\x02\x02\x02\u0112\u0113" +
		"\x05\x1A\x0E\x02\u0113\u0114\x07\x05\x02\x02\u0114\u0115\x05\x1A\x0E\x02" +
		"\u0115\u0116\x07\x06\x02\x02\u0116\u0117\x07,\x02\x02\u0117\u0118\x05" +
		"\x1A\x0E\x02\u0118\u011A\x03\x02\x02\x02\u0119\xED\x03\x02\x02\x02\u0119" +
		"\xF0\x03\x02\x02\x02\u0119\xFC\x03\x02\x02\x02\u0119\u0108\x03\x02\x02" +
		"\x02\u0119\u010C\x03\x02\x02\x02\u0119\u0112\x03\x02\x02\x02\u011A\x19" +
		"\x03\x02\x02\x02\u011B\u011C\b\x0E\x01\x02\u011C\u0147\x07=\x02\x02\u011D" +
		"\u0147\x07-\x02\x02\u011E\u011F\x07-\x02\x02\u011F\u0147\x07=\x02\x02" +
		"\u0120\u0122\x07<\x02\x02\u0121\u0123\x05,\x17\x02\u0122\u0121\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0147\x05*\x16\x02\u0125\u0147\x05\x1E\x10\x02\u0126\u0127\x07\x07\x02" +
		"\x02\u0127\u0128\x05\x1A\x0E\x02\u0128\u0129\x07\b\x02\x02\u0129\u0147" +
		"\x03\x02\x02\x02\u012A\u0133\x07\x05\x02\x02\u012B\u0130\x05\x1A\x0E\x02" +
		"\u012C\u012D\x07%\x02\x02\u012D\u012F\x05\x1A\x0E\x02\u012E\u012C\x03" +
		"\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0133\u012B\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0147\x07\x06\x02\x02\u0136\u0137\t\x04\x02" +
		"\x02\u0137\u0147\x05\x1A\x0E\x0E\u0138\u0143\x074\x02\x02\u0139\u013E" +
		"\x05$\x13\x02\u013A\u013B\x07%\x02\x02\u013B\u013D\x05$\x13\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0141\u0142\x07&\x02\x02\u0142\u0144\x03\x02\x02" +
		"\x02\u0143\u0139\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145" +
		"\x03\x02\x02\x02\u0145\u0147\x05\x1A\x0E\x03\u0146\u011B\x03\x02\x02\x02" +
		"\u0146\u011D\x03\x02\x02\x02\u0146\u011E\x03\x02\x02\x02\u0146\u0120\x03" +
		"\x02\x02\x02\u0146\u0125\x03\x02\x02\x02\u0146\u0126\x03\x02\x02\x02\u0146" +
		"\u012A\x03\x02\x02\x02\u0146\u0136\x03\x02\x02\x02\u0146\u0138\x03\x02" +
		"\x02\x02\u0147\u0181\x03\x02\x02\x02\u0148\u0149\f\r\x02\x02\u0149\u014A" +
		"\x07*\x02\x02\u014A\u0180\x05\x1A\x0E\x0E\u014B\u014C\f\f\x02\x02\u014C" +
		"\u014D\t\x05\x02\x02\u014D\u0180\x05\x1A\x0E\r\u014E\u014F\f\v\x02\x02" +
		"\u014F\u0150\t\x06\x02\x02\u0150\u0180\x05\x1A\x0E\f\u0151\u0152\f\n\x02" +
		"\x02\u0152\u0153\x07 \x02\x02\u0153\u0154\x07 \x02\x02\u0154\u0180\x05" +
		"\x1A\x0E\v\u0155\u0156\f\t\x02\x02\u0156\u0157\x07/\x02\x02\u0157\u0180" +
		"\x05\x1A\x0E\n\u0158\u0159\f\b\x02\x02\u0159\u015B\t\x07\x02\x02\u015A" +
		"\u015C\x07,\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0180\x05\x1A\x0E\t\u015E\u015F" +
		"\f\x07\x02\x02\u015F\u0160\t\b\x02\x02\u0160\u0161\x07,\x02\x02\u0161" +
		"\u0180\x05\x1A\x0E\b\u0162\u0163\f\x06\x02\x02\u0163\u0164\x071\x02\x02" +
		"\u0164\u0165\x071\x02\x02\u0165\u0180\x05\x1A\x0E\x07\u0166\u0167\f\x05" +
		"\x02\x02\u0167\u0168\x07#\x02\x02\u0168\u0169\x07#\x02\x02\u0169\u0180" +
		"\x05\x1A\x0E\x06\u016A\u016B\f\x04\x02\x02\u016B\u016C\x07#\x02\x02\u016C" +
		"\u016D\x07=\x02\x02\u016D\u016E\x07&\x02\x02\u016E\u0180\x05\x1A\x0E\x05" +
		"\u016F\u0171\f\x13\x02\x02\u0170\u0172\x05,\x17\x02\u0171\u0170\x03\x02" +
		"\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
		"\u0180\x05*\x16\x02\u0174\u0175\f\x12\x02\x02\u0175\u0176\x07\x05\x02" +
		"\x02\u0176\u0177\x05\x1A\x0E\x02\u0177\u0178\x07\x06\x02\x02\u0178\u0180" +
		"\x03\x02\x02\x02\u0179\u017B\f\x0F\x02\x02\u017A\u017C\x07/\x02\x02\u017B" +
		"\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02" +
		"\x02\x02\u017D\u017E\x07 \x02\x02\u017E\u0180\x07=\x02\x02\u017F\u0148" +
		"\x03\x02\x02\x02\u017F\u014B\x03\x02\x02\x02\u017F\u014E\x03\x02\x02\x02" +
		"\u017F\u0151\x03\x02\x02\x02\u017F\u0155\x03\x02\x02\x02\u017F\u0158\x03" +
		"\x02\x02\x02\u017F\u015E\x03\x02\x02\x02\u017F\u0162\x03\x02\x02\x02\u017F" +
		"\u0166\x03\x02\x02\x02\u017F\u016A\x03\x02\x02\x02\u017F\u016F\x03\x02" +
		"\x02\x02\u017F\u0174\x03\x02\x02\x02\u017F\u0179\x03\x02\x02\x02\u0180" +
		"\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02" +
		"\x02\x02\u0182\x1B\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0185" +
		"\b\x0F\x01\x02\u0185\u0187\x07<\x02\x02\u0186\u0188\x05,\x17\x02\u0187" +
		"\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0196\x03\x02" +
		"\x02\x02\u0189\u0196\x05\x1E\x10\x02\u018A\u018C\x05.\x18\x02\u018B\u018A" +
		"\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02" +
		"\u018D\u018F\x05&\x14\x02\u018E\u0190\x05\x1C\x0F\x02\u018F\u018E\x03" +
		"\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0196\x03\x02\x02\x02\u0191" +
		"\u0192\x07\x07\x02\x02\u0192\u0193\x05\x1C\x0F\x02\u0193\u0194\x07\b\x02" +
		"\x02\u0194\u0196\x03\x02\x02\x02\u0195\u0184\x03\x02\x02\x02\u0195\u0189" +
		"\x03\x02\x02\x02\u0195\u018B\x03\x02\x02\x02\u0195\u0191\x03\x02\x02\x02" +
		"\u0196\u01A7\x03\x02\x02\x02\u0197\u0198\f\x06\x02\x02\u0198\u0199\x07" +
		"1\x02\x02\u0199\u01A6\x05\x1C\x0F\x07\u019A\u019B\f\x05\x02\x02\u019B" +
		"\u019C\x07#\x02\x02\u019C\u01A6\x05\x1C\x0F\x06\u019D\u019E\f\b\x02\x02" +
		"\u019E\u01A6\x07/\x02\x02\u019F\u01A0\f\x07\x02\x02\u01A0\u01A2\x07\x05" +
		"\x02\x02\u01A1\u01A3\x077\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3" +
		"\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x07\x06\x02\x02" +
		"\u01A5\u0197\x03\x02\x02\x02\u01A5\u019A\x03\x02\x02\x02\u01A5\u019D\x03" +
		"\x02\x02\x02\u01A5\u019F\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\x1D\x03\x02\x02" +
		"\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01B1\x075\x02\x02\u01AB\u01B1" +
		"\x078\x02\x02\u01AC\u01B1\x077\x02\x02\u01AD\u01B1\x076\x02\x02\u01AE" +
		"\u01B1\x079\x02\x02\u01AF\u01B1\x07:\x02\x02\u01B0\u01AA\x03\x02\x02\x02" +
		"\u01B0\u01AB\x03\x02\x02\x02\u01B0\u01AC\x03\x02\x02\x02\u01B0\u01AD\x03" +
		"\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1" +
		"\x1F\x03\x02\x02\x02\u01B2\u01B4\t\t\x02\x02\u01B3\u01B2\x03\x02\x02\x02" +
		"\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03" +
		"\x02\x02\x02\u01B6!\x03\x02\x02\x02\u01B7\u01B8\t\n\x02\x02\u01B8#\x03" +
		"\x02\x02\x02\u01B9\u01BA\x07=\x02\x02\u01BA\u01BD\x05\x1C\x0F\x02\u01BB" +
		"\u01BC\x07\"\x02\x02\u01BC\u01BE\x07<\x02\x02\u01BD\u01BB\x03\x02\x02" +
		"\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE%\x03\x02\x02\x02\u01BF\u01C8\x07" +
		"\x07\x02\x02\u01C0\u01C5\x05$\x13\x02\u01C1\u01C2\x07%\x02\x02\u01C2\u01C4" +
		"\x05$\x13\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02" +
		"\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C9\x03" +
		"\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01C0\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x07\b\x02" +
		"\x02\u01CB\'\x03\x02\x02\x02\u01CC\u01CD\x07=\x02\x02\u01CD\u01CF\x07" +
		",\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01D1\x05\x1A\x0E\x02\u01D1)\x03\x02\x02" +
		"\x02\u01D2\u01DB\x07\x07\x02\x02\u01D3\u01D8\x05(\x15\x02\u01D4\u01D5" +
		"\x07%\x02\x02\u01D5\u01D7\x05(\x15\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7" +
		"\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01D3\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DE\x07\b\x02\x02\u01DE+\x03\x02\x02\x02\u01DF\u01E8" +
		"\x07$\x02\x02\u01E0\u01E5\x05\x1C\x0F\x02\u01E1\u01E2\x07%\x02\x02\u01E2" +
		"\u01E4\x05\x1C\x0F\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E7\x03\x02" +
		"\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
		"\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01E0\x03\x02" +
		"\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA" +
		"\u01EB\x07\'\x02\x02\u01EB-\x03\x02\x02\x02\u01EC\u01ED\x07$\x02\x02\u01ED" +
		"\u01F2\x07<\x02\x02\u01EE\u01EF\x07%\x02\x02\u01EF\u01F1\x07<\x02\x02" +
		"\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4" +
		"\u01F2\x03\x02\x02\x02\u01F5\u01F6\x07\'\x02\x02\u01F6/\x03\x02\x02\x02" +
		"\u01F7\u01F9\x07&\x02\x02\u01F8\u01FA\x05\x16\f\x02\u01F9\u01F8\x03\x02" +
		"\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u020C\x03\x02\x02\x02\u01FB" +
		"\u01FF\x07&\x02\x02\u01FC\u01FE\x07>\x02\x02\u01FD\u01FC\x03\x02\x02\x02" +
		"\u01FE\u0201\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03" +
		"\x02\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202" +
		"\u0207\x07\x03\x02\x02\u0203\u0206\x05\x16\f\x02\u0204\u0206\x07>\x02" +
		"\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0209" +
		"\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02" +
		"\u0208\u020A\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020C\x07" +
		"\x04\x02\x02\u020B\u01F7\x03\x02\x02\x02\u020B\u01FB\x03\x02\x02\x02\u020C" +
		"1\x03\x02\x02\x02\u020D\u020F\x07>\x02\x02\u020E\u020D\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03" +
		"\x02\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
		"\u0217\x07,\x02\x02\u0214\u0216\x07>\x02\x02\u0215\u0214\x03\x02\x02\x02" +
		"\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03" +
		"\x02\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
		"\u021D\x05\x16\f\x02\u021B\u021D\x050\x19\x02\u021C\u0210\x03\x02\x02" +
		"\x02\u021C\u021B\x03\x02\x02\x02\u021D3\x03\x02\x02\x02L79>@ETW\\dhqu" +
		"x|\x83\x85\x88\x93\x97\x9B\x9F\xA2\xA8\xAB\xAD\xB1\xB4\xB8\xC1\xC4\xD7" +
		"\xDC\xE3\xEB\xF6\u0102\u0119\u0122\u0130\u0133\u013E\u0143\u0146\u015B" +
		"\u0171\u017B\u017F\u0181\u0187\u018B\u018F\u0195\u01A2\u01A5\u01A7\u01B0" +
		"\u01B5\u01BD\u01C5\u01C8\u01CE\u01D8\u01DB\u01E5\u01E8\u01F2\u01F9\u01FF" +
		"\u0205\u0207\u020B\u0210\u0217\u021C";
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
	public _s30!: Token;
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
	public _name!: IdContext;
	public _alias!: IdContext;
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
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
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
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
export class IncludeClassMemberContext extends ClassMemberContext {
	public _name!: Token;
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitClassMemberContext extends ClassMemberContext {
	public INIT(): TerminalNode { return this.getToken(XonParser.INIT, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertyClassMemberContext extends ClassMemberContext {
	public _name!: Token;
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodClassMemberContext extends ClassMemberContext {
	public _name!: Token;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorClassMemberContext extends ClassMemberContext {
	public _name!: OperatorContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(ctx: ClassMemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class VariableDeclarationStatementContext extends StatementContext {
	public _name!: Token;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
export class AssignmentStatementContext extends StatementContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
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
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
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
export class InstantiationExpressionContext extends ExpressionContext {
	public _name!: Token;
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
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
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public genericArguments(): GenericArgumentsContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
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
export class MemberExpressionContext extends ExpressionContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XonParser.QUESTION, 0); }
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
	public _s40!: Token;
	public _op: Token[] = [];
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
	public _s46!: Token;
	public _op: Token[] = [];
	public _s39!: Token;
	public _s44!: Token;
	public __tset303!: Token;
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
	public _s31!: Token;
	public _op: Token[] = [];
	public _s38!: Token;
	public __tset358!: Token;
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
	public _s30!: Token;
	public _op: Token[] = [];
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
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ElvisExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s45!: Token;
	public _op: Token[] = [];
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
	public _s34!: Token;
	public _op: Token[] = [];
	public _s37!: Token;
	public __tset485!: Token;
	public _s42!: Token;
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
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s42!: Token;
	public _op: Token[] = [];
	public _s49!: Token;
	public __tset543!: Token;
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
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EQUAL);
		} else {
			return this.getToken(XonParser.EQUAL, i);
		}
	}
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s47!: Token;
	public _op: Token[] = [];
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
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.AMPERSAND);
		} else {
			return this.getToken(XonParser.AMPERSAND, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _s33!: Token;
	public _op: Token[] = [];
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
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
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
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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
export class FunctionTypeContext extends TypeContext {
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
	public TILDE(): TerminalNode[];
	public TILDE(i: number): TerminalNode;
	public TILDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.TILDE);
		} else {
			return this.getToken(XonParser.TILDE, i);
		}
	}
	public EXCLAMATION(): TerminalNode[];
	public EXCLAMATION(i: number): TerminalNode;
	public EXCLAMATION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EXCLAMATION);
		} else {
			return this.getToken(XonParser.EXCLAMATION, i);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.CARET);
		} else {
			return this.getToken(XonParser.CARET, i);
		}
	}
	public ASTERISK(): TerminalNode[];
	public ASTERISK(i: number): TerminalNode;
	public ASTERISK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ASTERISK);
		} else {
			return this.getToken(XonParser.ASTERISK, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.SLASH);
		} else {
			return this.getToken(XonParser.SLASH, i);
		}
	}
	public MODULO(): TerminalNode[];
	public MODULO(i: number): TerminalNode;
	public MODULO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MODULO);
		} else {
			return this.getToken(XonParser.MODULO, i);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PLUS);
		} else {
			return this.getToken(XonParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MINUS);
		} else {
			return this.getToken(XonParser.MINUS, i);
		}
	}
	public LESS(): TerminalNode[];
	public LESS(i: number): TerminalNode;
	public LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LESS);
		} else {
			return this.getToken(XonParser.LESS, i);
		}
	}
	public GREAT(): TerminalNode[];
	public GREAT(i: number): TerminalNode;
	public GREAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.GREAT);
		} else {
			return this.getToken(XonParser.GREAT, i);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EQUAL);
		} else {
			return this.getToken(XonParser.EQUAL, i);
		}
	}
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.AMPERSAND);
		} else {
			return this.getToken(XonParser.AMPERSAND, i);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
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
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class IdContext extends ParserRuleContext {
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _meta!: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.HASH, 0); }
	public UPPER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.UPPER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class ArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public LOWER_ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.LOWER_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class ArgumentsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_arguments; }
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


export class GenericParametersContext extends ParserRuleContext {
	public _UPPER_ID!: Token;
	public _names: Token[] = [];
	public LESS(): TerminalNode { return this.getToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode { return this.getToken(XonParser.GREAT, 0); }
	public UPPER_ID(): TerminalNode[];
	public UPPER_ID(i: number): TerminalNode;
	public UPPER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.UPPER_ID);
		} else {
			return this.getToken(XonParser.UPPER_ID, i);
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
	public get ruleIndex(): number { return XonParser.RULE_genericParameters; }
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


export class MethodBodyContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
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
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_methodBody; }
}


