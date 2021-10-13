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
	public static readonly AT = 28;
	public static readonly DOT = 29;
	public static readonly PLUS = 30;
	public static readonly HASH = 31;
	public static readonly PIPE = 32;
	public static readonly LESS = 33;
	public static readonly COMMA = 34;
	public static readonly COLON = 35;
	public static readonly GREAT = 36;
	public static readonly MINUS = 37;
	public static readonly SLASH = 38;
	public static readonly CARET = 39;
	public static readonly TILDE = 40;
	public static readonly EQUAL = 41;
	public static readonly DOLLAR = 42;
	public static readonly MODULO = 43;
	public static readonly QUESTION = 44;
	public static readonly ASTERISK = 45;
	public static readonly AMPERSAND = 46;
	public static readonly UNDERSCORE = 47;
	public static readonly EXCLAMATION = 48;
	public static readonly BACK_SLASH = 49;
	public static readonly NULL_LITERAL = 50;
	public static readonly FLOAT_LITERAL = 51;
	public static readonly INTEGER_LITERAL = 52;
	public static readonly BOOLEAN_LITERAL = 53;
	public static readonly CHAR_LITERAL = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly PREPROCESSOR = 56;
	public static readonly UPPER_ID = 57;
	public static readonly LOWER_ID = 58;
	public static readonly NL = 59;
	public static readonly WS = 60;
	public static readonly COMMENT = 61;
	public static readonly RULE_listing = 0;
	public static readonly RULE_export = 1;
	public static readonly RULE_library = 2;
	public static readonly RULE_libraryPath = 3;
	public static readonly RULE_libraryMember = 4;
	public static readonly RULE_definition = 5;
	public static readonly RULE_member = 6;
	public static readonly RULE_extensionMember = 7;
	public static readonly RULE_test = 8;
	public static readonly RULE_function = 9;
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
	public static readonly RULE_typeParameters = 21;
	public static readonly RULE_genericArguments = 22;
	public static readonly RULE_genericParameters = 23;
	public static readonly RULE_body = 24;
	public static readonly RULE_functionBody = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"listing", "export", "library", "libraryPath", "libraryMember", "definition", 
		"member", "extensionMember", "test", "function", "statement", "assignment", 
		"expression", "type", "literal", "operator", "id", "parameter", "parameters", 
		"argument", "arguments", "typeParameters", "genericArguments", "genericParameters", 
		"body", "functionBody",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'is'", "'as'", "'do'", "'if'", "'in'", "'for'", "'else'", "'init'", "'test'", 
		"'break'", "'infix'", "'while'", "'actual'", "'expect'", "'export'", "'import'", 
		"'prefix'", "'return'", "'postfix'", "'@'", "'.'", "'+'", "'#'", "'|'", 
		"'<'", "','", "':'", "'>'", "'-'", "'/'", "'^'", "'~'", "'='", "'$'", 
		"'%'", "'?'", "'*'", "'&'", "'_'", "'!'", "'\\'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "IS", "AS", "DO", "IF", "IN", 
		"FOR", "ELSE", "INIT", "TEST", "BREAK", "INFIX", "WHILE", "ACTUAL", "EXPECT", 
		"EXPORT", "IMPORT", "PREFIX", "RETURN", "POSTFIX", "AT", "DOT", "PLUS", 
		"HASH", "PIPE", "LESS", "COMMA", "COLON", "GREAT", "MINUS", "SLASH", "CARET", 
		"TILDE", "EQUAL", "DOLLAR", "MODULO", "QUESTION", "ASTERISK", "AMPERSAND", 
		"UNDERSCORE", "EXCLAMATION", "BACK_SLASH", "NULL_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "BOOLEAN_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
		"PREPROCESSOR", "UPPER_ID", "LOWER_ID", "NL", "WS", "COMMENT",
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
	public listing(): ListingContext {
		let _localctx: ListingContext = new ListingContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_listing);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 55;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.IMPORT:
						{
						this.state = 52;
						this.library();
						}
						break;
					case XonParser.EXPORT:
						{
						this.state = 53;
						this.export();
						}
						break;
					case XonParser.NL:
						{
						this.state = 54;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.TEST) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.MINUS - 33)) | (1 << (XonParser.DOLLAR - 33)) | (1 << (XonParser.EXCLAMATION - 33)) | (1 << (XonParser.BACK_SLASH - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.PREPROCESSOR - 33)) | (1 << (XonParser.UPPER_ID - 33)) | (1 << (XonParser.LOWER_ID - 33)) | (1 << (XonParser.NL - 33)))) !== 0)) {
				{
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 60;
					this.definition();
					}
					break;

				case 2:
					{
					this.state = 61;
					this.extensionMember();
					}
					break;

				case 3:
					{
					this.state = 62;
					this.test();
					}
					break;

				case 4:
					{
					this.state = 63;
					this.function();
					}
					break;

				case 5:
					{
					this.state = 64;
					this.statement();
					}
					break;

				case 6:
					{
					this.state = 65;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 70;
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
	public export(): ExportContext {
		let _localctx: ExportContext = new ExportContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_export);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(XonParser.EXPORT);
			this.state = 72;
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
		this.enterRule(_localctx, 4, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(XonParser.IMPORT);
			this.state = 75;
			this.libraryPath();
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.AS:
				{
				this.state = 76;
				this.match(XonParser.AS);
				this.state = 77;
				_localctx._alias = this.match(XonParser.LOWER_ID);
				}
				break;
			case XonParser.COLON:
				{
				this.state = 78;
				this.match(XonParser.COLON);
				this.state = 79;
				this.libraryMember();
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 80;
					this.match(XonParser.COMMA);
					this.state = 81;
					this.libraryMember();
					}
					}
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.EOF:
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
			case XonParser.DO:
			case XonParser.IF:
			case XonParser.FOR:
			case XonParser.TEST:
			case XonParser.BREAK:
			case XonParser.WHILE:
			case XonParser.ACTUAL:
			case XonParser.EXPORT:
			case XonParser.IMPORT:
			case XonParser.RETURN:
			case XonParser.PLUS:
			case XonParser.LESS:
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 89;
				this.match(XonParser.DOT);
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
			_localctx._LOWER_ID = this.match(XonParser.LOWER_ID);
			_localctx._names.push(_localctx._LOWER_ID);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.DOT) {
				{
				{
				this.state = 96;
				this.match(XonParser.DOT);
				this.state = 97;
				_localctx._LOWER_ID = this.match(XonParser.LOWER_ID);
				_localctx._names.push(_localctx._LOWER_ID);
				}
				}
				this.state = 102;
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
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_libraryMember);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				_localctx._name = this.id();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				_localctx._name = this.id();
				this.state = 105;
				this.match(XonParser.AS);
				this.state = 106;
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
		this.enterRule(_localctx, 10, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_localctx._name = this.match(XonParser.UPPER_ID);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 111;
				this.genericParameters();
				}
			}

			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN) {
				{
				this.state = 114;
				this.parameters();
				}
			}

			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 117;
				this.match(XonParser.IS);
				this.state = 118;
				this.type(0);
				}
			}

			this.state = 121;
			this.match(XonParser.COLON);
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 122;
				this.member();
				}
				break;

			case 2:
				{
				this.state = 123;
				this.match(XonParser.NL);
				this.state = 124;
				this.match(XonParser.INDENT);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 127;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.INIT:
					case XonParser.INFIX:
					case XonParser.PREFIX:
					case XonParser.POSTFIX:
					case XonParser.LOWER_ID:
						{
						this.state = 125;
						this.member();
						}
						break;
					case XonParser.NL:
						{
						this.state = 126;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.INIT) | (1 << XonParser.INFIX) | (1 << XonParser.PREFIX) | (1 << XonParser.POSTFIX))) !== 0) || _la === XonParser.LOWER_ID || _la === XonParser.NL);
				this.state = 131;
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
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				(_localctx as PropertyMemberContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 136;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 135;
					this.type(0);
					}
					break;
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON || _la === XonParser.EQUAL) {
					{
					this.state = 138;
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
					this.state = 139;
					this.expression(0);
					}
				}

				}
				break;

			case 2:
				_localctx = new HierarchyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 142;
				(_localctx as HierarchyMemberContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
					{
					this.state = 143;
					this.type(0);
					}
				}

				this.state = 146;
				this.match(XonParser.NL);
				this.state = 147;
				this.match(XonParser.INDENT);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 150;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
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
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 148;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 149;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.MINUS - 37)) | (1 << (XonParser.DOLLAR - 37)) | (1 << (XonParser.EXCLAMATION - 37)) | (1 << (XonParser.BACK_SLASH - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.UPPER_ID - 37)) | (1 << (XonParser.LOWER_ID - 37)) | (1 << (XonParser.NL - 37)))) !== 0));
				this.state = 154;
				this.match(XonParser.DEDENT);
				}
				break;

			case 3:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 155;
				this.match(XonParser.INIT);
				this.state = 156;
				this.body();
				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 157;
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
				this.state = 158;
				this.operator();
				this.state = 159;
				this.parameters();
				this.state = 161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 160;
					this.type(0);
					}
					break;
				}
				this.state = 164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 163;
					this.functionBody();
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 166;
				(_localctx as MethodMemberContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 167;
					this.genericParameters();
					}
				}

				this.state = 170;
				this.parameters();
				this.state = 172;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 171;
					this.type(0);
					}
					break;
				}
				this.state = 175;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 174;
					this.functionBody();
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
	public extensionMember(): ExtensionMemberContext {
		let _localctx: ExtensionMemberContext = new ExtensionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_extensionMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			_localctx._receiver = this.type(0);
			this.state = 180;
			this.match(XonParser.DOT);
			this.state = 181;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 182;
				this.genericParameters();
				}
				break;
			}
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 185;
				this.parameters();
				}
				break;
			}
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 188;
				_localctx._result = this.type(0);
				}
				break;
			}
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.functionBody();
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(XonParser.TEST);
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 195;
				this.expression(0);
				}
				break;
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COLON) {
				{
				this.state = 198;
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
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS) {
				{
				this.state = 202;
				this.genericParameters();
				}
			}

			this.state = 205;
			this.parameters();
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 206;
				this.type(0);
				}
				break;
			}
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.functionBody();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.match(XonParser.FOR);
				this.state = 219;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 213;
					(_localctx as ForStatementContext)._value = this.match(XonParser.LOWER_ID);
					this.state = 216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 214;
						this.match(XonParser.COMMA);
						this.state = 215;
						(_localctx as ForStatementContext)._index = this.match(XonParser.LOWER_ID);
						}
					}

					this.state = 218;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 221;
				this.expression(0);
				this.state = 222;
				this.body();
				}
				break;

			case 2:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.match(XonParser.WHILE);
				this.state = 225;
				this.expression(0);
				this.state = 226;
				this.body();
				}
				break;

			case 3:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				this.match(XonParser.DO);
				this.state = 229;
				this.body();
				this.state = 230;
				this.match(XonParser.WHILE);
				this.state = 231;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				this.match(XonParser.IF);
				this.state = 234;
				this.expression(0);
				this.state = 235;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 238;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 236;
					this.match(XonParser.ELSE);
					this.state = 237;
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
				this.state = 240;
				this.match(XonParser.BREAK);
				}
				break;

			case 6:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 241;
				this.match(XonParser.RETURN);
				this.state = 243;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 242;
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
				this.state = 245;
				this.match(XonParser.ACTUAL);
				this.state = 246;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 247;
					this.match(XonParser.NL);
					}
					}
					this.state = 250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 252;
				this.match(XonParser.EXPECT);
				this.state = 253;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 8:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 255;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 9:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 256;
				this.assignment();
				}
				break;

			case 10:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 257;
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
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new TypeAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				(_localctx as TypeAssignmentContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 261;
				this.match(XonParser.EQUAL);
				this.state = 262;
				this.type(0);
				}
				break;

			case 2:
				_localctx = new IdAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				(_localctx as IdAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
					{
					this.state = 264;
					this.type(0);
					}
				}

				this.state = 267;
				this.match(XonParser.EQUAL);
				this.state = 268;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new HierarchyAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 269;
				(_localctx as HierarchyAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
					{
					this.state = 270;
					this.type(0);
					}
				}

				this.state = 273;
				this.match(XonParser.NL);
				this.state = 274;
				this.match(XonParser.INDENT);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 277;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
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
					case XonParser.UPPER_ID:
					case XonParser.LOWER_ID:
						{
						this.state = 275;
						this.assignment();
						}
						break;
					case XonParser.NL:
						{
						this.state = 276;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.MINUS - 37)) | (1 << (XonParser.DOLLAR - 37)) | (1 << (XonParser.EXCLAMATION - 37)) | (1 << (XonParser.BACK_SLASH - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.UPPER_ID - 37)) | (1 << (XonParser.LOWER_ID - 37)) | (1 << (XonParser.NL - 37)))) !== 0));
				this.state = 281;
				this.match(XonParser.DEDENT);
				}
				break;

			case 4:
				_localctx = new ArrayAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 283;
				(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 284;
					this.match(XonParser.COMMA);
					this.state = 285;
					(_localctx as ArrayAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ArrayAssignmentContext)._names.push((_localctx as ArrayAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 291;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 292;
				this.match(XonParser.EQUAL);
				this.state = 293;
				this.expression(0);
				}
				break;

			case 5:
				_localctx = new ObjectAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 294;
				this.match(XonParser.OPEN_BRACE);
				this.state = 295;
				(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
				(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 296;
					this.match(XonParser.COMMA);
					this.state = 297;
					(_localctx as ObjectAssignmentContext)._LOWER_ID = this.match(XonParser.LOWER_ID);
					(_localctx as ObjectAssignmentContext)._names.push((_localctx as ObjectAssignmentContext)._LOWER_ID);
					}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 303;
				this.match(XonParser.CLOSE_BRACE);
				this.state = 304;
				this.match(XonParser.EQUAL);
				this.state = 305;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ThisMemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 306;
				this.match(XonParser.DOLLAR);
				this.state = 307;
				(_localctx as ThisMemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 308;
				this.match(XonParser.EQUAL);
				this.state = 309;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new MemberAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 310;
				this.expression(0);
				this.state = 311;
				this.match(XonParser.DOT);
				this.state = 312;
				(_localctx as MemberAssignmentContext)._name = this.match(XonParser.LOWER_ID);
				this.state = 313;
				this.match(XonParser.EQUAL);
				this.state = 314;
				this.expression(0);
				}
				break;

			case 8:
				_localctx = new IndexAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 316;
				this.expression(0);
				this.state = 317;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 318;
				this.expression(0);
				this.state = 319;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 320;
				this.match(XonParser.EQUAL);
				this.state = 321;
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
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 326;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 2:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 327;
				this.match(XonParser.DOLLAR);
				}
				break;

			case 3:
				{
				_localctx = new InstanceMemberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 328;
				this.match(XonParser.DOLLAR);
				this.state = 329;
				(_localctx as InstanceMemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
				}
				break;

			case 4:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 330;
				this.literal();
				}
				break;

			case 5:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 331;
				this.match(XonParser.OPEN_PAREN);
				this.state = 332;
				this.expression(0);
				this.state = 333;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 335;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.MINUS - 37)) | (1 << (XonParser.DOLLAR - 37)) | (1 << (XonParser.EXCLAMATION - 37)) | (1 << (XonParser.BACK_SLASH - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.LOWER_ID - 37)))) !== 0)) {
					{
					this.state = 336;
					this.expression(0);
					this.state = 341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 337;
						this.match(XonParser.COMMA);
						this.state = 338;
						this.expression(0);
						}
						}
						this.state = 343;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 346;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 347;
				(_localctx as PrefixExpressionContext).__tset129 = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (XonParser.PLUS - 30)) | (1 << (XonParser.MINUS - 30)) | (1 << (XonParser.EXCLAMATION - 30)))) !== 0))) {
					(_localctx as PrefixExpressionContext).__tset129 = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				(_localctx as PrefixExpressionContext)._op.push((_localctx as PrefixExpressionContext).__tset129);
				this.state = 348;
				this.expression(12);
				}
				break;

			case 8:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 349;
				this.match(XonParser.BACK_SLASH);
				this.state = 360;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 350;
					this.parameter();
					this.state = 355;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 351;
						this.match(XonParser.COMMA);
						this.state = 352;
						this.parameter();
						}
						}
						this.state = 357;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 358;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 362;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 422;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 420;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 365;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 366;
						(_localctx as PowExpressionContext)._s39 = this.match(XonParser.CARET);
						(_localctx as PowExpressionContext)._op.push((_localctx as PowExpressionContext)._s39);
						this.state = 367;
						(_localctx as PowExpressionContext)._right = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 368;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 369;
						(_localctx as MulDivModExpressionContext).__tset271 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.SLASH - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.ASTERISK - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext).__tset271 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as MulDivModExpressionContext)._op.push((_localctx as MulDivModExpressionContext).__tset271);
						this.state = 370;
						(_localctx as MulDivModExpressionContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 371;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 372;
						(_localctx as AddSubExpressionContext).__tset326 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.PLUS || _la === XonParser.MINUS)) {
							(_localctx as AddSubExpressionContext).__tset326 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as AddSubExpressionContext)._op.push((_localctx as AddSubExpressionContext).__tset326);
						this.state = 373;
						(_localctx as AddSubExpressionContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 374;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 375;
						(_localctx as RangeExpressionContext)._s29 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s29);
						this.state = 376;
						(_localctx as RangeExpressionContext)._s29 = this.match(XonParser.DOT);
						(_localctx as RangeExpressionContext)._op.push((_localctx as RangeExpressionContext)._s29);
						this.state = 377;
						(_localctx as RangeExpressionContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ElvisExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ElvisExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 379;
						(_localctx as ElvisExpressionContext)._s44 = this.match(XonParser.QUESTION);
						(_localctx as ElvisExpressionContext)._op.push((_localctx as ElvisExpressionContext)._s44);
						this.state = 380;
						(_localctx as ElvisExpressionContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 382;
						(_localctx as RelationalExpressionContext).__tset453 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.LESS || _la === XonParser.GREAT)) {
							(_localctx as RelationalExpressionContext).__tset453 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext).__tset453);
						this.state = 384;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.EQUAL) {
							{
							this.state = 383;
							(_localctx as RelationalExpressionContext)._s41 = this.match(XonParser.EQUAL);
							(_localctx as RelationalExpressionContext)._op.push((_localctx as RelationalExpressionContext)._s41);
							}
						}

						this.state = 386;
						(_localctx as RelationalExpressionContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 388;
						(_localctx as EqualityExpressionContext).__tset511 = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.EXCLAMATION)) {
							(_localctx as EqualityExpressionContext).__tset511 = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext).__tset511);
						this.state = 389;
						(_localctx as EqualityExpressionContext)._s41 = this.match(XonParser.EQUAL);
						(_localctx as EqualityExpressionContext)._op.push((_localctx as EqualityExpressionContext)._s41);
						this.state = 390;
						(_localctx as EqualityExpressionContext)._right = this.expression(6);
						}
						break;

					case 8:
						{
						_localctx = new ConjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 392;
						(_localctx as ConjunctionExpressionContext)._s46 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s46);
						this.state = 393;
						(_localctx as ConjunctionExpressionContext)._s46 = this.match(XonParser.AMPERSAND);
						(_localctx as ConjunctionExpressionContext)._op.push((_localctx as ConjunctionExpressionContext)._s46);
						this.state = 394;
						(_localctx as ConjunctionExpressionContext)._right = this.expression(5);
						}
						break;

					case 9:
						{
						_localctx = new DisjunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 396;
						(_localctx as DisjunctionExpressionContext)._s32 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s32);
						this.state = 397;
						(_localctx as DisjunctionExpressionContext)._s32 = this.match(XonParser.PIPE);
						(_localctx as DisjunctionExpressionContext)._op.push((_localctx as DisjunctionExpressionContext)._s32);
						this.state = 398;
						(_localctx as DisjunctionExpressionContext)._right = this.expression(4);
						}
						break;

					case 10:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 399;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 400;
						this.match(XonParser.PIPE);
						this.state = 401;
						(_localctx as PipeExpressionContext)._name = this.match(XonParser.LOWER_ID);
						this.state = 402;
						this.match(XonParser.COLON);
						this.state = 403;
						this.expression(3);
						}
						break;

					case 11:
						{
						_localctx = new CallExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 404;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 406;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.LESS) {
							{
							this.state = 405;
							this.genericArguments();
							}
						}

						this.state = 408;
						this.arguments();
						}
						break;

					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 410;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 411;
						this.expression(0);
						this.state = 412;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 414;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 416;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.QUESTION) {
							{
							this.state = 415;
							this.match(XonParser.QUESTION);
							}
						}

						this.state = 418;
						this.match(XonParser.DOT);
						this.state = 419;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.LOWER_ID);
						}
						break;
					}
					}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 426;
				(_localctx as PlainTypeContext)._name = this.match(XonParser.UPPER_ID);
				this.state = 428;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 427;
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
				this.state = 430;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS) {
					{
					this.state = 431;
					this.genericParameters();
					}
				}

				this.state = 434;
				this.typeParameters();
				this.state = 435;
				this.type(2);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 437;
				this.match(XonParser.OPEN_PAREN);
				this.state = 438;
				this.type(0);
				this.state = 439;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 456;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 454;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new IntersectionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 443;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 444;
						this.match(XonParser.AMPERSAND);
						this.state = 445;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 446;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 447;
						this.match(XonParser.PIPE);
						this.state = 448;
						this.type(4);
						}
						break;

					case 3:
						{
						_localctx = new NullableTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 449;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 450;
						this.match(XonParser.QUESTION);
						}
						break;

					case 4:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 451;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 452;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 453;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 458;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.NULL_LITERAL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.match(XonParser.NULL_LITERAL);
				}
				break;
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 460;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 461;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 462;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 463;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 464;
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
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 467;
				_la = this._input.LA(1);
				if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (XonParser.DOT - 29)) | (1 << (XonParser.PLUS - 29)) | (1 << (XonParser.PIPE - 29)) | (1 << (XonParser.LESS - 29)) | (1 << (XonParser.GREAT - 29)) | (1 << (XonParser.MINUS - 29)) | (1 << (XonParser.SLASH - 29)) | (1 << (XonParser.CARET - 29)) | (1 << (XonParser.TILDE - 29)) | (1 << (XonParser.EQUAL - 29)) | (1 << (XonParser.MODULO - 29)) | (1 << (XonParser.ASTERISK - 29)) | (1 << (XonParser.AMPERSAND - 29)) | (1 << (XonParser.EXCLAMATION - 29)))) !== 0))) {
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
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (XonParser.DOT - 29)) | (1 << (XonParser.PLUS - 29)) | (1 << (XonParser.PIPE - 29)) | (1 << (XonParser.LESS - 29)) | (1 << (XonParser.GREAT - 29)) | (1 << (XonParser.MINUS - 29)) | (1 << (XonParser.SLASH - 29)) | (1 << (XonParser.CARET - 29)) | (1 << (XonParser.TILDE - 29)) | (1 << (XonParser.EQUAL - 29)) | (1 << (XonParser.MODULO - 29)) | (1 << (XonParser.ASTERISK - 29)) | (1 << (XonParser.AMPERSAND - 29)) | (1 << (XonParser.EXCLAMATION - 29)))) !== 0));
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
			this.state = 472;
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
			this.state = 474;
			_localctx._name = this.match(XonParser.LOWER_ID);
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
				{
				this.state = 475;
				this.type(0);
				}
			}

			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.HASH) {
				{
				this.state = 478;
				this.match(XonParser.HASH);
				this.state = 479;
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
			this.state = 482;
			this.match(XonParser.OPEN_PAREN);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LOWER_ID) {
				{
				this.state = 483;
				this.parameter();
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 484;
					this.match(XonParser.COMMA);
					this.state = 485;
					this.parameter();
					}
					}
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 493;
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
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				_localctx._name = this.match(XonParser.LOWER_ID);
				this.state = 496;
				this.match(XonParser.EQUAL);
				}
				break;
			}
			this.state = 499;
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
			this.state = 501;
			this.match(XonParser.OPEN_PAREN);
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.MINUS - 37)) | (1 << (XonParser.DOLLAR - 37)) | (1 << (XonParser.EXCLAMATION - 37)) | (1 << (XonParser.BACK_SLASH - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.LOWER_ID - 37)))) !== 0)) {
				{
				this.state = 502;
				this.argument();
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 503;
					this.match(XonParser.COMMA);
					this.state = 504;
					this.argument();
					}
					}
					this.state = 509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 512;
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
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XonParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(XonParser.OPEN_PAREN);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
				{
				this.state = 515;
				this.type(0);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 516;
					this.match(XonParser.COMMA);
					this.state = 517;
					this.type(0);
					}
					}
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 525;
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
		this.enterRule(_localctx, 44, XonParser.RULE_genericArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(XonParser.LESS);
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.OPEN_PAREN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (XonParser.LESS - 33)) | (1 << (XonParser.NULL_LITERAL - 33)) | (1 << (XonParser.FLOAT_LITERAL - 33)) | (1 << (XonParser.INTEGER_LITERAL - 33)) | (1 << (XonParser.BOOLEAN_LITERAL - 33)) | (1 << (XonParser.CHAR_LITERAL - 33)) | (1 << (XonParser.STRING_LITERAL - 33)) | (1 << (XonParser.UPPER_ID - 33)))) !== 0)) {
				{
				this.state = 528;
				this.type(0);
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 529;
					this.match(XonParser.COMMA);
					this.state = 530;
					this.type(0);
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 538;
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
		this.enterRule(_localctx, 46, XonParser.RULE_genericParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(XonParser.LESS);
			this.state = 541;
			_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
			_localctx._names.push(_localctx._UPPER_ID);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 542;
				this.match(XonParser.COMMA);
				this.state = 543;
				_localctx._UPPER_ID = this.match(XonParser.UPPER_ID);
				_localctx._names.push(_localctx._UPPER_ID);
				}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 549;
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
		this.enterRule(_localctx, 48, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 551;
				this.match(XonParser.COLON);
				this.state = 553;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 552;
					this.statement();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 555;
				this.match(XonParser.COLON);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 556;
					this.match(XonParser.NL);
					}
					}
					this.state = 561;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 562;
				this.match(XonParser.INDENT);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.DO) | (1 << XonParser.IF) | (1 << XonParser.FOR) | (1 << XonParser.BREAK) | (1 << XonParser.WHILE) | (1 << XonParser.ACTUAL) | (1 << XonParser.RETURN) | (1 << XonParser.PLUS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.MINUS - 37)) | (1 << (XonParser.DOLLAR - 37)) | (1 << (XonParser.EXCLAMATION - 37)) | (1 << (XonParser.BACK_SLASH - 37)) | (1 << (XonParser.NULL_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.BOOLEAN_LITERAL - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)) | (1 << (XonParser.PREPROCESSOR - 37)) | (1 << (XonParser.UPPER_ID - 37)) | (1 << (XonParser.LOWER_ID - 37)) | (1 << (XonParser.NL - 37)))) !== 0)) {
					{
					this.state = 565;
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
						this.state = 563;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 564;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 569;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 570;
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XonParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.EQUAL:
			case XonParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 573;
					this.match(XonParser.NL);
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 579;
				this.match(XonParser.EQUAL);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.NL) {
					{
					{
					this.state = 580;
					this.match(XonParser.NL);
					}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 586;
				this.statement();
				}
				break;
			case XonParser.COLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 587;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0251\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
		"\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x07\x02E\n\x02\f\x02\x0E\x02H\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04U\n\x04\f\x04\x0E\x04X\v\x04\x05\x04Z\n\x04\x03\x05\x07\x05]\n\x05" +
		"\f\x05\x0E\x05`\v\x05\x03\x05\x03\x05\x03\x05\x07\x05e\n\x05\f\x05\x0E" +
		"\x05h\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06o\n\x06\x03" +
		"\x07\x03\x07\x05\x07s\n\x07\x03\x07\x05\x07v\n\x07\x03\x07\x03\x07\x05" +
		"\x07z\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\x82" +
		"\n\x07\r\x07\x0E\x07\x83\x03\x07\x05\x07\x87\n\x07\x03\b\x03\b\x05\b\x8B" +
		"\n\b\x03\b\x03\b\x05\b\x8F\n\b\x03\b\x03\b\x05\b\x93\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x06\b\x99\n\b\r\b\x0E\b\x9A\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b\xA4\n\b\x03\b\x05\b\xA7\n\b\x03\b\x03\b\x05\b\xAB\n\b\x03" +
		"\b\x03\b\x05\b\xAF\n\b\x03\b\x05\b\xB2\n\b\x05\b\xB4\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xBA\n\t\x03\t\x05\t\xBD\n\t\x03\t\x05\t\xC0\n\t\x03\t\x05" +
		"\t\xC3\n\t\x03\n\x03\n\x05\n\xC7\n\n\x03\n\x05\n\xCA\n\n\x03\v\x03\v\x05" +
		"\v\xCE\n\v\x03\v\x03\v\x05\v\xD2\n\v\x03\v\x05\v\xD5\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\xDB\n\f\x03\f\x05\f\xDE\n\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\xF1\n\f\x03\f\x03\f\x03\f\x05\f\xF6\n\f\x03\f\x03\f\x03\f\x06" +
		"\f\xFB\n\f\r\f\x0E\f\xFC\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0105" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u010C\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u0112\n\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0118\n\r\r\r\x0E\r\u0119" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0121\n\r\f\r\x0E\r\u0124\v\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u012D\n\r\f\r\x0E\r\u0130" +
		"\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0146\n\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0156\n\x0E\f\x0E\x0E" +
		"\x0E\u0159\v\x0E\x05\x0E\u015B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x07\x0E\u0164\n\x0E\f\x0E\x0E\x0E\u0167\v\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u016B\n\x0E\x03\x0E\x05\x0E\u016E\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0183\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0199\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01A3\n\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u01A7\n\x0E\f\x0E\x0E\x0E\u01AA\v\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u01AF\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01B3\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01BC\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u01C9\n\x0F\f\x0F\x0E\x0F\u01CC\v\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01D4\n\x10\x03\x11\x06\x11" +
		"\u01D7\n\x11\r\x11\x0E\x11\u01D8\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13" +
		"\u01DF\n\x13\x03\x13\x03\x13\x05\x13\u01E3\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u01E9\n\x14\f\x14\x0E\x14\u01EC\v\x14\x05\x14\u01EE\n" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01F4\n\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u01FC\n\x16\f\x16\x0E\x16\u01FF" +
		"\v\x16\x05\x16\u0201\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x07\x17\u0209\n\x17\f\x17\x0E\x17\u020C\v\x17\x05\x17\u020E\n\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0216\n\x18\f" +
		"\x18\x0E\x18\u0219\v\x18\x05\x18\u021B\n\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x07\x19\u0223\n\x19\f\x19\x0E\x19\u0226\v\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u022C\n\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0230\n\x1A\f\x1A\x0E\x1A\u0233\v\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0238\n\x1A\f\x1A\x0E\x1A\u023B\v\x1A\x03\x1A\x05\x1A\u023E\n\x1A\x03" +
		"\x1B\x07\x1B\u0241\n\x1B\f\x1B\x0E\x1B\u0244\v\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u0248\n\x1B\f\x1B\x0E\x1B\u024B\v\x1B\x03\x1B\x03\x1B\x05\x1B\u024F" +
		"\n\x1B\x03\x1B\x02\x02\x04\x1A\x1C\x1C\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02" +
		"\v\x04\x02%%++\x05\x02\x15\x15\x1B\x1B\x1D\x1D\x05\x02  \'\'22\x05\x02" +
		"((--//\x04\x02  \'\'\x04\x02##&&\x04\x02++22\b\x02\x1F \"#&+--/022\x03" +
		"\x02;<\x02\u02BC\x02;\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06L\x03\x02" +
		"\x02\x02\b^\x03\x02\x02\x02\nn\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0E" +
		"\xB3\x03\x02\x02\x02\x10\xB5\x03\x02\x02\x02\x12\xC4\x03\x02\x02\x02\x14" +
		"\xCB\x03\x02\x02\x02\x16\u0104\x03\x02\x02\x02\x18\u0145\x03\x02\x02\x02" +
		"\x1A\u016D\x03\x02\x02\x02\x1C\u01BB\x03\x02\x02\x02\x1E\u01D3\x03\x02" +
		"\x02\x02 \u01D6\x03\x02\x02\x02\"\u01DA\x03\x02\x02\x02$\u01DC\x03\x02" +
		"\x02\x02&\u01E4\x03\x02\x02\x02(\u01F3\x03\x02\x02\x02*\u01F7\x03\x02" +
		"\x02\x02,\u0204\x03\x02\x02\x02.\u0211\x03\x02\x02\x020\u021E\x03\x02" +
		"\x02\x022\u023D\x03\x02\x02\x024\u024E\x03\x02\x02\x026:\x05\x06\x04\x02" +
		"7:\x05\x04\x03\x028:\x07=\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x02" +
		"98\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02" +
		"<F\x03\x02\x02\x02=;\x03\x02\x02\x02>E\x05\f\x07\x02?E\x05\x10\t\x02@" +
		"E\x05\x12\n\x02AE\x05\x14\v\x02BE\x05\x16\f\x02CE\x07=\x02\x02D>\x03\x02" +
		"\x02\x02D?\x03\x02\x02\x02D@\x03\x02\x02\x02DA\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02DC\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02" +
		"\x02\x02G\x03\x03\x02\x02\x02HF\x03\x02\x02\x02IJ\x07\x19\x02\x02JK\x05" +
		"\b\x05\x02K\x05\x03\x02\x02\x02LM\x07\x1A\x02\x02MY\x05\b\x05\x02NO\x07" +
		"\f\x02\x02OZ\x07<\x02\x02PQ\x07%\x02\x02QV\x05\n\x06\x02RS\x07$\x02\x02" +
		"SU\x05\n\x06\x02TR\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02" +
		"VW\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02YN\x03\x02\x02\x02" +
		"YP\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x07\x03\x02\x02\x02[]\x07\x1F\x02" +
		"\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02af\x07<\x02\x02bc\x07\x1F" +
		"\x02\x02ce\x07<\x02\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02" +
		"\x02\x02fg\x03\x02\x02\x02g\t\x03\x02\x02\x02hf\x03\x02\x02\x02io\x05" +
		"\"\x12\x02jk\x05\"\x12\x02kl\x07\f\x02\x02lm\x05\"\x12\x02mo\x03\x02\x02" +
		"\x02ni\x03\x02\x02\x02nj\x03\x02\x02\x02o\v\x03\x02\x02\x02pr\x07;\x02" +
		"\x02qs\x050\x19\x02rq\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02" +
		"\x02tv\x05&\x14\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vy\x03\x02\x02" +
		"\x02wx\x07\v\x02\x02xz\x05\x1C\x0F\x02yw\x03\x02\x02\x02yz\x03\x02\x02" +
		"\x02z{\x03\x02\x02\x02{\x86\x07%\x02\x02|\x87\x05\x0E\b\x02}~\x07=\x02" +
		"\x02~\x81\x07\x03\x02\x02\x7F\x82\x05\x0E\b\x02\x80\x82\x07=\x02\x02\x81" +
		"\x7F\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85" +
		"\x87\x07\x04\x02\x02\x86|\x03\x02\x02\x02\x86}\x03\x02\x02\x02\x86\x87" +
		"\x03\x02\x02\x02\x87\r\x03\x02\x02\x02\x88\x8A\x07<\x02\x02\x89\x8B\x05" +
		"\x1C\x0F\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8E\x03" +
		"\x02\x02\x02\x8C\x8D\t\x02\x02\x02\x8D\x8F\x05\x1A\x0E\x02\x8E\x8C\x03" +
		"\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\xB4\x03\x02\x02\x02\x90\x92\x07" +
		"<\x02\x02\x91\x93\x05\x1C\x0F\x02\x92\x91\x03\x02\x02\x02\x92\x93\x03" +
		"\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x95\x07=\x02\x02\x95\x98\x07" +
		"\x03\x02\x02\x96\x99\x05\x18\r\x02\x97\x99\x07=\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02" +
		"\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\xB4\x07\x04" +
		"\x02\x02\x9D\x9E\x07\x12\x02\x02\x9E\xB4\x052\x1A\x02\x9F\xA0\t\x03\x02" +
		"\x02\xA0\xA1\x05 \x11\x02\xA1\xA3\x05&\x14\x02\xA2\xA4\x05\x1C\x0F\x02" +
		"\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02" +
		"\xA5\xA7\x054\x1B\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02" +
		"\xA7\xB4\x03\x02\x02\x02\xA8\xAA\x07<\x02\x02\xA9\xAB\x050\x19\x02\xAA" +
		"\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC" +
		"\xAE\x05&\x14\x02\xAD\xAF\x05\x1C\x0F\x02\xAE\xAD\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xB2\x054\x1B\x02\xB1" +
		"\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3" +
		"\x88\x03\x02\x02\x02\xB3\x90\x03\x02\x02\x02\xB3\x9D\x03\x02\x02\x02\xB3" +
		"\x9F\x03\x02\x02\x02\xB3\xA8\x03\x02\x02\x02\xB4\x0F\x03\x02\x02\x02\xB5" +
		"\xB6\x05\x1C\x0F\x02\xB6\xB7\x07\x1F\x02\x02\xB7\xB9\x07<\x02\x02\xB8" +
		"\xBA\x050\x19\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA" +
		"\xBC\x03\x02\x02\x02\xBB\xBD\x05&\x14\x02\xBC\xBB\x03\x02\x02\x02\xBC" +
		"\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xC0\x05\x1C\x0F\x02\xBF" +
		"\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1" +
		"\xC3\x054\x1B\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3" +
		"\x11\x03\x02\x02\x02\xC4\xC6\x07\x13\x02\x02\xC5\xC7\x05\x1A\x0E\x02\xC6" +
		"\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8" +
		"\xCA\x052\x1A\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\x13\x03\x02\x02\x02\xCB\xCD\x07<\x02\x02\xCC\xCE\x050\x19\x02\xCD\xCC" +
		"\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1" +
		"\x05&\x14\x02\xD0\xD2\x05\x1C\x0F\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD5\x054\x1B\x02\xD4\xD3" +
		"\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\x15\x03\x02\x02\x02\xD6\xDD" +
		"\x07\x10\x02\x02\xD7\xDA\x07<\x02\x02\xD8\xD9\x07$\x02\x02\xD9\xDB\x07" +
		"<\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03" +
		"\x02\x02\x02\xDC\xDE\x07\x0F\x02\x02\xDD\xD7\x03\x02\x02\x02\xDD\xDE\x03" +
		"\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x05\x1A\x0E\x02\xE0\xE1\x05" +
		"2\x1A\x02\xE1\u0105\x03\x02\x02\x02\xE2\xE3\x07\x16\x02\x02\xE3\xE4\x05" +
		"\x1A\x0E\x02\xE4\xE5\x052\x1A\x02\xE5\u0105\x03\x02\x02\x02\xE6\xE7\x07" +
		"\r\x02\x02\xE7\xE8\x052\x1A\x02\xE8\xE9\x07\x16\x02\x02\xE9\xEA\x05\x1A" +
		"\x0E\x02\xEA\u0105\x03\x02\x02\x02\xEB\xEC\x07\x0E\x02\x02\xEC\xED\x05" +
		"\x1A\x0E\x02\xED\xF0\x052\x1A\x02\xEE\xEF\x07\x11\x02\x02\xEF\xF1\x05" +
		"2\x1A\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\u0105\x03" +
		"\x02\x02\x02\xF2\u0105\x07\x14\x02\x02\xF3\xF5\x07\x1C\x02\x02\xF4\xF6" +
		"\x05\x1A\x0E\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\u0105" +
		"\x03\x02\x02\x02\xF7\xF8\x07\x17\x02\x02\xF8\xFA\x05\x1A\x0E\x02\xF9\xFB" +
		"\x07=\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFA" +
		"\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF" +
		"\x07\x18\x02\x02\xFF\u0100\x05\x1A\x0E\x02\u0100\u0105\x03\x02\x02\x02" +
		"\u0101\u0105\x07:\x02\x02\u0102\u0105\x05\x18\r\x02\u0103\u0105\x05\x1A" +
		"\x0E\x02\u0104\xD6\x03\x02\x02\x02\u0104\xE2\x03\x02\x02\x02\u0104\xE6" +
		"\x03\x02\x02\x02\u0104\xEB\x03\x02\x02\x02\u0104\xF2\x03\x02\x02\x02\u0104" +
		"\xF3\x03\x02\x02\x02\u0104\xF7\x03\x02\x02\x02\u0104\u0101\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\x17" +
		"\x03\x02\x02\x02\u0106\u0107\x07;\x02\x02\u0107\u0108\x07+\x02\x02\u0108" +
		"\u0146\x05\x1C\x0F\x02\u0109\u010B\x07<\x02\x02\u010A\u010C\x05\x1C\x0F" +
		"\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010D\u010E\x07+\x02\x02\u010E\u0146\x05\x1A\x0E\x02" +
		"\u010F\u0111\x07<\x02\x02\u0110\u0112\x05\x1C\x0F\x02\u0111\u0110\x03" +
		"\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\u0114\x07=\x02\x02\u0114\u0117\x07\x03\x02\x02\u0115\u0118\x05\x18\r" +
		"\x02\u0116\u0118\x07=\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
		"\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0146\x07" +
		"\x04\x02\x02\u011C\u011D\x07\x05\x02\x02\u011D\u0122\x07<\x02\x02\u011E" +
		"\u011F\x07$\x02\x02\u011F\u0121\x07<\x02\x02\u0120\u011E\x03\x02\x02\x02" +
		"\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03" +
		"\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125" +
		"\u0126\x07\x06\x02\x02\u0126\u0127\x07+\x02\x02\u0127\u0146\x05\x1A\x0E" +
		"\x02\u0128\u0129\x07\t\x02\x02\u0129\u012E\x07<\x02\x02\u012A\u012B\x07" +
		"$\x02\x02\u012B\u012D\x07<\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0130" +
		"\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02" +
		"\u012F\u0131\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\x07" +
		"\n\x02\x02\u0132\u0133\x07+\x02\x02\u0133\u0146\x05\x1A\x0E\x02\u0134" +
		"\u0135\x07,\x02\x02\u0135\u0136\x07<\x02\x02\u0136\u0137\x07+\x02\x02" +
		"\u0137\u0146\x05\x1A\x0E\x02\u0138\u0139\x05\x1A\x0E\x02\u0139\u013A\x07" +
		"\x1F\x02\x02\u013A\u013B\x07<\x02\x02\u013B\u013C\x07+\x02\x02\u013C\u013D" +
		"\x05\x1A\x0E\x02\u013D\u0146\x03\x02\x02\x02\u013E\u013F\x05\x1A\x0E\x02" +
		"\u013F\u0140\x07\x05\x02\x02\u0140\u0141\x05\x1A\x0E\x02\u0141\u0142\x07" +
		"\x06\x02\x02\u0142\u0143\x07+\x02\x02\u0143\u0144\x05\x1A\x0E\x02\u0144" +
		"\u0146\x03\x02\x02\x02\u0145\u0106\x03\x02\x02\x02\u0145\u0109\x03\x02" +
		"\x02\x02\u0145\u010F\x03\x02\x02\x02\u0145\u011C\x03\x02\x02\x02\u0145" +
		"\u0128\x03\x02\x02\x02\u0145\u0134\x03\x02\x02\x02\u0145\u0138\x03\x02" +
		"\x02\x02\u0145\u013E\x03\x02\x02\x02\u0146\x19\x03\x02\x02\x02\u0147\u0148" +
		"\b\x0E\x01\x02\u0148\u016E\x07<\x02\x02\u0149\u016E\x07,\x02\x02\u014A" +
		"\u014B\x07,\x02\x02\u014B\u016E\x07<\x02\x02\u014C\u016E\x05\x1E\x10\x02" +
		"\u014D\u014E\x07\x07\x02\x02\u014E\u014F\x05\x1A\x0E\x02\u014F\u0150\x07" +
		"\b\x02\x02\u0150\u016E\x03\x02\x02\x02\u0151\u015A\x07\x05\x02\x02\u0152" +
		"\u0157\x05\x1A\x0E\x02\u0153\u0154\x07$\x02\x02\u0154\u0156\x05\x1A\x0E" +
		"\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155" +
		"\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02" +
		"\u0159\u0157\x03\x02\x02\x02\u015A\u0152\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u016E\x07\x06\x02\x02\u015D" +
		"\u015E\t\x04\x02\x02\u015E\u016E\x05\x1A\x0E\x0E\u015F\u016A\x073\x02" +
		"\x02\u0160\u0165\x05$\x13\x02\u0161\u0162\x07$\x02\x02\u0162\u0164\x05" +
		"$\x13\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02" +
		"\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x07%\x02\x02\u0169\u016B" +
		"\x03\x02\x02\x02\u016A\u0160\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02" +
		"\u016B\u016C\x03\x02\x02\x02\u016C\u016E\x05\x1A\x0E\x03\u016D\u0147\x03" +
		"\x02\x02\x02\u016D\u0149\x03\x02\x02\x02\u016D\u014A\x03\x02\x02\x02\u016D" +
		"\u014C\x03\x02\x02\x02\u016D\u014D\x03\x02\x02\x02\u016D\u0151\x03\x02" +
		"\x02\x02\u016D\u015D\x03\x02\x02\x02\u016D\u015F\x03\x02\x02\x02\u016E" +
		"\u01A8\x03\x02\x02\x02\u016F\u0170\f\r\x02\x02\u0170\u0171\x07)\x02\x02" +
		"\u0171\u01A7\x05\x1A\x0E\x0E\u0172\u0173\f\f\x02\x02\u0173\u0174\t\x05" +
		"\x02\x02\u0174\u01A7\x05\x1A\x0E\r\u0175\u0176\f\v\x02\x02\u0176\u0177" +
		"\t\x06\x02\x02\u0177\u01A7\x05\x1A\x0E\f\u0178\u0179\f\n\x02\x02\u0179" +
		"\u017A\x07\x1F\x02\x02\u017A\u017B\x07\x1F\x02\x02\u017B\u01A7\x05\x1A" +
		"\x0E\v\u017C\u017D\f\t\x02\x02\u017D\u017E\x07.\x02\x02\u017E\u01A7\x05" +
		"\x1A\x0E\n\u017F\u0180\f\b\x02\x02\u0180\u0182\t\x07\x02\x02\u0181\u0183" +
		"\x07+\x02\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02" +
		"\u0183\u0184\x03\x02\x02\x02\u0184\u01A7\x05\x1A\x0E\t\u0185\u0186\f\x07" +
		"\x02\x02\u0186\u0187\t\b\x02\x02\u0187\u0188\x07+\x02\x02\u0188\u01A7" +
		"\x05\x1A\x0E\b\u0189\u018A\f\x06\x02\x02\u018A\u018B\x070\x02\x02\u018B" +
		"\u018C\x070\x02\x02\u018C\u01A7\x05\x1A\x0E\x07\u018D\u018E\f\x05\x02" +
		"\x02\u018E\u018F\x07\"\x02\x02\u018F\u0190\x07\"\x02\x02\u0190\u01A7\x05" +
		"\x1A\x0E\x06\u0191\u0192\f\x04\x02\x02\u0192\u0193\x07\"\x02\x02\u0193" +
		"\u0194\x07<\x02\x02\u0194\u0195\x07%\x02\x02\u0195\u01A7\x05\x1A\x0E\x05" +
		"\u0196\u0198\f\x13\x02\x02\u0197\u0199\x05.\x18\x02\u0198\u0197\x03\x02" +
		"\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A" +
		"\u01A7\x05*\x16\x02\u019B\u019C\f\x12\x02\x02\u019C\u019D\x07\x05\x02" +
		"\x02\u019D\u019E\x05\x1A\x0E\x02\u019E\u019F\x07\x06\x02\x02\u019F\u01A7" +
		"\x03\x02\x02\x02\u01A0\u01A2\f\x0F\x02\x02\u01A1\u01A3\x07.\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02" +
		"\x02\x02\u01A4\u01A5\x07\x1F\x02\x02\u01A5\u01A7\x07<\x02\x02\u01A6\u016F" +
		"\x03\x02\x02\x02\u01A6\u0172\x03\x02\x02\x02\u01A6\u0175\x03\x02\x02\x02" +
		"\u01A6\u0178\x03\x02\x02\x02\u01A6\u017C\x03\x02\x02\x02\u01A6\u017F\x03" +
		"\x02\x02\x02\u01A6\u0185\x03\x02\x02\x02\u01A6\u0189\x03\x02\x02\x02\u01A6" +
		"\u018D\x03\x02\x02\x02\u01A6\u0191\x03\x02\x02\x02\u01A6\u0196\x03\x02" +
		"\x02\x02\u01A6\u019B\x03\x02\x02\x02\u01A6\u01A0\x03\x02\x02\x02\u01A7" +
		"\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02" +
		"\x02\x02\u01A9\x1B\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AC" +
		"\b\x0F\x01\x02\u01AC\u01AE\x07;\x02\x02\u01AD\u01AF\x05.\x18\x02\u01AE" +
		"\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01BC\x03\x02" +
		"\x02\x02\u01B0\u01BC\x05\x1E\x10\x02\u01B1\u01B3\x050\x19\x02\u01B2\u01B1" +
		"\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B4\u01B5\x05,\x17\x02\u01B5\u01B6\x05\x1C\x0F\x04\u01B6\u01BC\x03" +
		"\x02\x02\x02\u01B7\u01B8\x07\x07\x02\x02\u01B8\u01B9\x05\x1C\x0F\x02\u01B9" +
		"\u01BA\x07\b\x02\x02\u01BA\u01BC\x03\x02\x02\x02\u01BB\u01AB\x03\x02\x02" +
		"\x02\u01BB\u01B0\x03\x02\x02\x02\u01BB\u01B2\x03\x02\x02\x02\u01BB\u01B7" +
		"\x03\x02\x02\x02\u01BC\u01CA\x03\x02\x02\x02\u01BD\u01BE\f\x06\x02\x02" +
		"\u01BE\u01BF\x070\x02\x02\u01BF\u01C9\x05\x1C\x0F\x07\u01C0\u01C1\f\x05" +
		"\x02\x02\u01C1\u01C2\x07\"\x02\x02\u01C2\u01C9\x05\x1C\x0F\x06\u01C3\u01C4" +
		"\f\b\x02\x02\u01C4\u01C9\x07.\x02\x02\u01C5\u01C6\f\x07\x02\x02\u01C6" +
		"\u01C7\x07\x05\x02\x02\u01C7\u01C9\x07\x06\x02\x02\u01C8\u01BD\x03\x02" +
		"\x02\x02\u01C8\u01C0\x03\x02\x02\x02\u01C8\u01C3\x03\x02\x02\x02\u01C8" +
		"\u01C5\x03\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02" +
		"\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\x1D\x03\x02\x02\x02\u01CC\u01CA" +
		"\x03\x02\x02\x02\u01CD\u01D4\x074\x02\x02\u01CE\u01D4\x077\x02\x02\u01CF" +
		"\u01D4\x076\x02\x02\u01D0\u01D4\x075\x02\x02\u01D1\u01D4\x078\x02\x02" +
		"\u01D2\u01D4\x079\x02\x02\u01D3\u01CD\x03\x02\x02\x02\u01D3\u01CE\x03" +
		"\x02\x02\x02\u01D3\u01CF\x03\x02\x02\x02\u01D3\u01D0\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\x1F\x03\x02\x02" +
		"\x02\u01D5\u01D7\t\t\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03" +
		"\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"!\x03\x02\x02\x02\u01DA\u01DB\t\n\x02\x02\u01DB#\x03\x02\x02\x02\u01DC" +
		"\u01DE\x07<\x02\x02\u01DD\u01DF\x05\x1C\x0F\x02\u01DE\u01DD\x03\x02\x02" +
		"\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01E1" +
		"\x07!\x02\x02\u01E1\u01E3\x07;\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2" +
		"\u01E3\x03\x02\x02\x02\u01E3%\x03\x02\x02\x02\u01E4\u01ED\x07\x07\x02" +
		"\x02\u01E5\u01EA\x05$\x13\x02\u01E6\u01E7\x07$\x02\x02\u01E7\u01E9\x05" +
		"$\x13\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA" +
		"\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EE\x03\x02" +
		"\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01E5\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07\b\x02" +
		"\x02\u01F0\'\x03\x02\x02\x02\u01F1\u01F2\x07<\x02\x02\u01F2\u01F4\x07" +
		"+\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"\u01F5\x03\x02\x02\x02\u01F5\u01F6\x05\x1A\x0E\x02\u01F6)\x03\x02\x02" +
		"\x02\u01F7\u0200\x07\x07\x02\x02\u01F8\u01FD\x05(\x15\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01F9\u01FA\x07$\x02\x02\u01FA\u01FC\x05(\x15\x02\u01FB\u01F9\x03\x02" +
		"\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u0201\x03\x02\x02\x02\u01FF\u01FD\x03\x02" +
		"\x02\x02\u0200\u01F8\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201" +
		"\u0202\x03\x02\x02\x02\u0202\u0203\x07\b\x02\x02\u0203+\x03\x02\x02\x02" +
		"\u0204\u020D\x07\x07\x02\x02\u0205\u020A\x05\x1C\x0F\x02\u0206\u0207\x07" +
		"$\x02\x02\u0207\u0209\x05\x1C\x0F\x02\u0208\u0206\x03\x02\x02\x02\u0209" +
		"\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02" +
		"\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D" +
		"\u0205\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02" +
		"\x02\x02\u020F\u0210\x07\b\x02\x02\u0210-\x03\x02\x02\x02\u0211\u021A" +
		"\x07#\x02\x02\u0212\u0217\x05\x1C\x0F\x02\u0213\u0214\x07$\x02\x02\u0214" +
		"\u0216\x05\x1C\x0F\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0219\x03\x02" +
		"\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218" +
		"\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u0212\x03\x02" +
		"\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C" +
		"\u021D\x07&\x02\x02\u021D/\x03\x02\x02\x02\u021E\u021F\x07#\x02\x02\u021F" +
		"\u0224\x07;\x02\x02\u0220\u0221\x07$\x02\x02\u0221\u0223\x07;\x02\x02" +
		"\u0222\u0220\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03" +
		"\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0227\x03\x02\x02\x02\u0226" +
		"\u0224\x03\x02\x02\x02\u0227\u0228\x07&\x02\x02\u02281\x03\x02\x02\x02" +
		"\u0229\u022B\x07%\x02\x02\u022A\u022C\x05\x16\f\x02\u022B\u022A\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u023E\x03\x02\x02\x02\u022D" +
		"\u0231\x07%\x02\x02\u022E\u0230\x07=\x02\x02\u022F\u022E\x03\x02\x02\x02" +
		"\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03" +
		"\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0239\x07\x03\x02\x02\u0235\u0238\x05\x16\f\x02\u0236\u0238\x07=\x02" +
		"\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023B" +
		"\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02" +
		"\u023A\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023E\x07" +
		"\x04\x02\x02\u023D\u0229\x03\x02\x02\x02\u023D\u022D\x03\x02\x02\x02\u023E" +
		"3\x03\x02\x02\x02\u023F\u0241\x07=\x02\x02\u0240\u023F\x03\x02\x02\x02" +
		"\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03" +
		"\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245" +
		"\u0249\x07+\x02\x02\u0246\u0248\x07=\x02\x02\u0247\u0246\x03\x02\x02\x02" +
		"\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03" +
		"\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C" +
		"\u024F\x05\x16\f\x02\u024D\u024F\x052\x1A\x02\u024E\u0242\x03\x02\x02" +
		"\x02\u024E\u024D\x03\x02\x02\x02\u024F5\x03\x02\x02\x02W9;DFVY^fnruy\x81" +
		"\x83\x86\x8A\x8E\x92\x98\x9A\xA3\xA6\xAA\xAE\xB1\xB3\xB9\xBC\xBF\xC2\xC6" +
		"\xC9\xCD\xD1\xD4\xDA\xDD\xF0\xF5\xFC\u0104\u010B\u0111\u0117\u0119\u0122" +
		"\u012E\u0145\u0157\u015A\u0165\u016A\u016D\u0182\u0198\u01A2\u01A6\u01A8" +
		"\u01AE\u01B2\u01BB\u01C8\u01CA\u01D3\u01D8\u01DE\u01E2\u01EA\u01ED\u01F3" +
		"\u01FD\u0200\u020A\u020D\u0217\u021A\u0224\u022B\u0231\u0237\u0239\u023D" +
		"\u0242\u0249\u024E";
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

export class ListingContext extends ParserRuleContext {
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
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public extensionMember(): ExtensionMemberContext[];
	public extensionMember(i: number): ExtensionMemberContext;
	public extensionMember(i?: number): ExtensionMemberContext | ExtensionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMemberContext);
		} else {
			return this.getRuleContext(i, ExtensionMemberContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_listing; }
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
	public _LOWER_ID!: Token;
	public _names: Token[] = [];
	public LOWER_ID(): TerminalNode[];
	public LOWER_ID(i: number): TerminalNode;
	public LOWER_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.LOWER_ID);
		} else {
			return this.getToken(XonParser.LOWER_ID, i);
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
	public _name!: Token;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
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
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
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
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class MemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_member; }
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends MemberContext {
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
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class HierarchyMemberContext extends MemberContext {
	public _name!: Token;
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitMemberContext extends MemberContext {
	public INIT(): TerminalNode { return this.getToken(XonParser.INIT, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorMemberContext extends MemberContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public INFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.INFIX, 0); }
	public PREFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.PREFIX, 0); }
	public POSTFIX(): TerminalNode | undefined { return this.tryGetToken(XonParser.POSTFIX, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
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
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExtensionMemberContext extends ParserRuleContext {
	public _receiver!: TypeContext;
	public _name!: Token;
	public _result!: TypeContext;
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_extensionMember; }
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


export class FunctionContext extends ParserRuleContext {
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
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_function; }
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
export class TypeAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public UPPER_ID(): TerminalNode { return this.getToken(XonParser.UPPER_ID, 0); }
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public EQUAL(): TerminalNode { return this.getToken(XonParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(ctx: AssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class HierarchyAssignmentContext extends AssignmentContext {
	public _name!: Token;
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public LOWER_ID(): TerminalNode { return this.getToken(XonParser.LOWER_ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
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
	public _s48!: Token;
	public _op: Token[] = [];
	public _s37!: Token;
	public _s30!: Token;
	public __tset129!: Token;
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
	public _s39!: Token;
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
	public _s45!: Token;
	public _op: Token[] = [];
	public _s38!: Token;
	public _s43!: Token;
	public __tset271!: Token;
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
	public _s30!: Token;
	public _op: Token[] = [];
	public _s37!: Token;
	public __tset326!: Token;
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
	public _s29!: Token;
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
	public _s44!: Token;
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
	public _s33!: Token;
	public _op: Token[] = [];
	public _s36!: Token;
	public __tset453!: Token;
	public _s41!: Token;
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
	public _s41!: Token;
	public _op: Token[] = [];
	public _s48!: Token;
	public __tset511!: Token;
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
	public _s46!: Token;
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
	public _s32!: Token;
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
export class PlainTypeContext extends TypeContext {
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
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
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public genericParameters(): GenericParametersContext | undefined {
		return this.tryGetRuleContext(0, GenericParametersContext);
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


export class TypeParametersContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_typeParameters; }
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


export class FunctionBodyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return XonParser.RULE_functionBody; }
}


