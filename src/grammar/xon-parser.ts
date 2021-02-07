// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT

 
// @ts-nocheck


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
	public static readonly Infix = 3;
	public static readonly Is = 4;
	public static readonly As = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly ElseIf = 8;
	public static readonly Loop = 9;
	public static readonly In = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly Preprocessor = 13;
	public static readonly LineBreak = 14;
	public static readonly OpenBracket = 15;
	public static readonly CloseBracket = 16;
	public static readonly OpenParen = 17;
	public static readonly CloseParen = 18;
	public static readonly OpenBrace = 19;
	public static readonly CloseBrace = 20;
	public static readonly Comma = 21;
	public static readonly Assign = 22;
	public static readonly Question = 23;
	public static readonly Colon = 24;
	public static readonly Dot = 25;
	public static readonly Plus = 26;
	public static readonly Minus = 27;
	public static readonly Exclamation = 28;
	public static readonly Asterisk = 29;
	public static readonly Slash = 30;
	public static readonly Modulo = 31;
	public static readonly Caret = 32;
	public static readonly Hash = 33;
	public static readonly LessThan = 34;
	public static readonly MoreThan = 35;
	public static readonly LessThanEquals = 36;
	public static readonly MoreThanEquals = 37;
	public static readonly Equals = 38;
	public static readonly NotEquals = 39;
	public static readonly And = 40;
	public static readonly Or = 41;
	public static readonly AsteriskAssign = 42;
	public static readonly SlashAssign = 43;
	public static readonly PercentAssign = 44;
	public static readonly PlusAssign = 45;
	public static readonly MinusAssign = 46;
	public static readonly Pipe = 47;
	public static readonly LambdaStart = 48;
	public static readonly Range = 49;
	public static readonly Elipsis = 50;
	public static readonly BooleanLiteral = 51;
	public static readonly NumberLiteral = 52;
	public static readonly CharLiteral = 53;
	public static readonly StringLiteral = 54;
	public static readonly StringFormatStart = 55;
	public static readonly StringFormatMiddle = 56;
	public static readonly StringFormatEnd = 57;
	public static readonly ID = 58;
	public static readonly Skip = 59;
	public static readonly UnexpectedCharacter = 60;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_operator = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_statement = 9;
	public static readonly RULE_body = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_literal = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"operator", "argument", "type", "statement", "body", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'infix'", "'is'", "'as'", "'if'", "'else'", 
		"'elif'", "'loop'", "'in'", "'break'", "'return'", undefined, undefined, 
		"'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", "':'", 
		"'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
		"'%='", "'+='", "'-='", "'|'", "'\\'", "'..'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Infix", "Is", "As", "If", "Else", "ElseIf", 
		"Loop", "In", "Break", "Return", "Preprocessor", "LineBreak", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Comma", "Assign", "Question", "Colon", "Dot", "Plus", "Minus", "Exclamation", 
		"Asterisk", "Slash", "Modulo", "Caret", "Hash", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"AsteriskAssign", "SlashAssign", "PercentAssign", "PlusAssign", "MinusAssign", 
		"Pipe", "LambdaStart", "Range", "Elipsis", "BooleanLiteral", "NumberLiteral", 
		"CharLiteral", "StringLiteral", "StringFormatStart", "StringFormatMiddle", 
		"StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 26;
					this.library();
					}
					}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 32;
					this.statement();
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.LineBreak || _la === XonParser.ID) {
				{
				{
				this.state = 38;
				this.definition();
				}
				}
				this.state = 43;
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
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_library);
		let _la: number;
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.libraryPath();
				this.state = 45;
				this.match(XonParser.Colon);
				this.state = 46;
				this.libraryMember();
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 47;
					this.match(XonParser.Comma);
					this.state = 48;
					this.libraryMember();
					}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.match(XonParser.LineBreak);
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
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(XonParser.ID);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 58;
				this.match(XonParser.Minus);
				this.state = 59;
				this.match(XonParser.ID);
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(XonParser.Slash);
			this.state = 66;
			this.match(XonParser.ID);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.Minus) {
				{
				{
				this.state = 67;
				this.match(XonParser.Minus);
				this.state = 68;
				this.match(XonParser.ID);
				}
				}
				this.state = 73;
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
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			_localctx._name = this.match(XonParser.ID);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.As) {
				{
				this.state = 75;
				this.match(XonParser.As);
				this.state = 76;
				_localctx._alias = this.match(XonParser.ID);
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
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.match(XonParser.ID);
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Is) {
					{
					this.state = 80;
					this.match(XonParser.Is);
					this.state = 81;
					this.type();
					}
				}

				this.state = 84;
				this.match(XonParser.Colon);
				this.state = 85;
				this.match(XonParser.LineBreak);
				this.state = 86;
				this.match(XonParser.INDENT);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 87;
					this.member();
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.Infix || _la === XonParser.LineBreak || _la === XonParser.ID);
				this.state = 92;
				this.match(XonParser.DEDENT);
				}
				break;
			case XonParser.LineBreak:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(XonParser.LineBreak);
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
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.match(XonParser.ID);
				this.state = 98;
				this.type();
				}
				break;

			case 2:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this.match(XonParser.ID);
				this.state = 100;
				this.match(XonParser.OpenParen);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 101;
					this.argument();
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 102;
						this.match(XonParser.Comma);
						this.state = 103;
						this.argument();
						}
						}
						this.state = 108;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 111;
				this.match(XonParser.CloseParen);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 112;
					this.type();
					}
				}

				this.state = 115;
				this.body();
				}
				break;

			case 3:
				_localctx = new InfixOperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 116;
				this.match(XonParser.Infix);
				this.state = 117;
				this.operator();
				this.state = 118;
				this.match(XonParser.OpenParen);
				this.state = 119;
				this.argument();
				this.state = 120;
				this.match(XonParser.CloseParen);
				this.state = 122;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 121;
					this.type();
					}
					break;
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Colon) {
					{
					this.state = 124;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new LineBreakMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.match(XonParser.LineBreak);
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Plus) | (1 << XonParser.Minus) | (1 << XonParser.Asterisk) | (1 << XonParser.Slash))) !== 0))) {
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(XonParser.ID);
			this.state = 133;
			this.type();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(XonParser.ID);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LessThan) {
				{
				this.state = 136;
				this.match(XonParser.LessThan);
				this.state = 137;
				this.type();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.Comma) {
					{
					{
					this.state = 138;
					this.match(XonParser.Comma);
					this.state = 139;
					this.type();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 145;
				this.match(XonParser.MoreThan);
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
		this.enterRule(_localctx, 18, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(XonParser.If);
				this.state = 150;
				this.expression(0);
				this.state = 151;
				this.body();
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ElseIf) {
					{
					{
					this.state = 152;
					this.match(XonParser.ElseIf);
					this.state = 153;
					this.expression(0);
					this.state = 154;
					this.body();
					}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.Else) {
					{
					this.state = 161;
					this.match(XonParser.Else);
					this.state = 162;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.match(XonParser.Loop);
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.BooleanLiteral - 51)) | (1 << (XonParser.NumberLiteral - 51)) | (1 << (XonParser.CharLiteral - 51)) | (1 << (XonParser.StringLiteral - 51)) | (1 << (XonParser.StringFormatStart - 51)) | (1 << (XonParser.ID - 51)))) !== 0)) {
					{
					this.state = 178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						this.state = 166;
						(_localctx as LoopStatementContext)._value = this.match(XonParser.ID);
						this.state = 171;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
						case 1:
							{
							this.state = 167;
							this.match(XonParser.Comma);
							this.state = 169;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 168;
								(_localctx as LoopStatementContext)._key = this.match(XonParser.ID);
								}
							}

							}
							break;
						}
						this.state = 175;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.Comma) {
							{
							this.state = 173;
							this.match(XonParser.Comma);
							this.state = 174;
							(_localctx as LoopStatementContext)._index = this.match(XonParser.ID);
							}
						}

						this.state = 177;
						this.match(XonParser.In);
						}
						break;
					}
					this.state = 180;
					this.expression(0);
					}
				}

				this.state = 183;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.match(XonParser.Break);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 185;
				this.match(XonParser.Return);
				this.state = 187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 186;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 189;
				this.match(XonParser.ID);
				this.state = 190;
				this.match(XonParser.Assign);
				this.state = 191;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 192;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 193;
				this.match(XonParser.Preprocessor);
				}
				break;

			case 8:
				_localctx = new LineBreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 194;
				this.match(XonParser.LineBreak);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(XonParser.Colon);
			this.state = 198;
			this.match(XonParser.LineBreak);
			this.state = 199;
			this.match(XonParser.INDENT);
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 200;
				this.statement();
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.If) | (1 << XonParser.Loop) | (1 << XonParser.Break) | (1 << XonParser.Return) | (1 << XonParser.Preprocessor) | (1 << XonParser.LineBreak) | (1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.BooleanLiteral - 51)) | (1 << (XonParser.NumberLiteral - 51)) | (1 << (XonParser.CharLiteral - 51)) | (1 << (XonParser.StringLiteral - 51)) | (1 << (XonParser.StringFormatStart - 51)) | (1 << (XonParser.ID - 51)))) !== 0));
			this.state = 205;
			this.match(XonParser.DEDENT);
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 208;
				this.match(XonParser.ID);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 209;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.match(XonParser.Minus);
				this.state = 211;
				this.expression(15);
				}
				break;

			case 4:
				{
				_localctx = new LogicalNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 212;
				this.match(XonParser.Exclamation);
				this.state = 213;
				this.expression(14);
				}
				break;

			case 5:
				{
				_localctx = new StringFormatExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 214;
				this.match(XonParser.StringFormatStart);
				this.state = 220;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 215;
						this.expression(0);
						this.state = 216;
						this.match(XonParser.StringFormatMiddle);
						}
						}
					}
					this.state = 222;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 223;
				this.expression(0);
				this.state = 224;
				this.match(XonParser.StringFormatEnd);
				}
				break;

			case 6:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.match(XonParser.OpenBracket);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.BooleanLiteral - 51)) | (1 << (XonParser.NumberLiteral - 51)) | (1 << (XonParser.CharLiteral - 51)) | (1 << (XonParser.StringLiteral - 51)) | (1 << (XonParser.StringFormatStart - 51)) | (1 << (XonParser.ID - 51)))) !== 0)) {
					{
					this.state = 227;
					this.expression(0);
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 228;
						this.match(XonParser.Comma);
						this.state = 229;
						this.expression(0);
						}
						}
						this.state = 234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 237;
				this.match(XonParser.CloseBracket);
				}
				break;

			case 7:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 238;
				this.match(XonParser.OpenBrace);
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 239;
					this.match(XonParser.ID);
					this.state = 240;
					this.match(XonParser.Colon);
					this.state = 241;
					this.expression(0);
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 242;
						this.match(XonParser.Comma);
						this.state = 243;
						this.match(XonParser.ID);
						this.state = 244;
						this.match(XonParser.Colon);
						this.state = 245;
						this.expression(0);
						}
						}
						this.state = 250;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 253;
				this.match(XonParser.CloseBrace);
				}
				break;

			case 8:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 254;
				this.match(XonParser.OpenParen);
				this.state = 255;
				this.expression(0);
				this.state = 256;
				this.match(XonParser.CloseParen);
				}
				break;

			case 9:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 258;
				this.match(XonParser.OpenParen);
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 259;
					this.match(XonParser.ID);
					this.state = 261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.ID) {
						{
						this.state = 260;
						this.type();
						}
					}

					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.Comma) {
						{
						{
						this.state = 263;
						this.match(XonParser.Comma);
						this.state = 264;
						this.match(XonParser.ID);
						this.state = 266;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.ID) {
							{
							this.state = 265;
							this.type();
							}
						}

						}
						}
						this.state = 272;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 275;
				this.match(XonParser.CloseParen);
				this.state = 276;
				this.match(XonParser.Colon);
				this.state = 277;
				this.expression(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 334;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 332;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 281;
						this.match(XonParser.Caret);
						this.state = 282;
						(_localctx as PowExpressionContext)._exponent = this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 284;
						(_localctx as MulDivModExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.Asterisk) | (1 << XonParser.Slash) | (1 << XonParser.Modulo))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 285;
						(_localctx as MulDivModExpressionContext)._right = this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 287;
						(_localctx as AddSubExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Plus || _la === XonParser.Minus)) {
							(_localctx as AddSubExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 288;
						(_localctx as AddSubExpressionContext)._right = this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 290;
						(_localctx as RelationalExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.LessThan - 34)) | (1 << (XonParser.MoreThan - 34)) | (1 << (XonParser.LessThanEquals - 34)) | (1 << (XonParser.MoreThanEquals - 34)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 291;
						(_localctx as RelationalExpressionContext)._right = this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 292;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 293;
						(_localctx as EqualityExpressionContext)._operation = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.Equals || _la === XonParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._operation = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 294;
						(_localctx as EqualityExpressionContext)._right = this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 295;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 296;
						this.match(XonParser.And);
						this.state = 297;
						(_localctx as LogicalAndExpressionContext)._right = this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 298;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 299;
						this.match(XonParser.Or);
						this.state = 300;
						(_localctx as LogicalOrExpressionContext)._right = this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new RangeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._min = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 302;
						this.match(XonParser.Range);
						this.state = 303;
						(_localctx as RangeExpressionContext)._max = this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new PipeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PipeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 305;
						this.match(XonParser.Pipe);
						this.state = 308;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
						case 1:
							{
							this.state = 306;
							this.match(XonParser.ID);
							this.state = 307;
							this.match(XonParser.Colon);
							}
							break;
						}
						this.state = 310;
						(_localctx as PipeExpressionContext)._right = this.expression(3);
						}
						break;

					case 10:
						{
						_localctx = new FunctionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionExpressionContext)._object = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 311;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 312;
						this.match(XonParser.OpenParen);
						this.state = 321;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OpenBracket) | (1 << XonParser.OpenParen) | (1 << XonParser.OpenBrace) | (1 << XonParser.Minus) | (1 << XonParser.Exclamation))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (XonParser.BooleanLiteral - 51)) | (1 << (XonParser.NumberLiteral - 51)) | (1 << (XonParser.CharLiteral - 51)) | (1 << (XonParser.StringLiteral - 51)) | (1 << (XonParser.StringFormatStart - 51)) | (1 << (XonParser.ID - 51)))) !== 0)) {
							{
							this.state = 313;
							(_localctx as FunctionExpressionContext)._expression = this.expression(0);
							(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
							this.state = 318;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.Comma) {
								{
								{
								this.state = 314;
								this.match(XonParser.Comma);
								this.state = 315;
								(_localctx as FunctionExpressionContext)._expression = this.expression(0);
								(_localctx as FunctionExpressionContext)._args.push((_localctx as FunctionExpressionContext)._expression);
								}
								}
								this.state = 320;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 323;
						this.match(XonParser.CloseParen);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 324;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 325;
						this.match(XonParser.OpenBracket);
						this.state = 326;
						(_localctx as IndexExpressionContext)._index = this.expression(0);
						this.state = 327;
						this.match(XonParser.CloseBracket);
						}
						break;

					case 12:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 330;
						this.match(XonParser.Dot);
						this.state = 331;
						this.match(XonParser.ID);
						}
						break;
					}
					}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
		this.enterRule(_localctx, 24, XonParser.RULE_literal);
		try {
			this.state = 341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BooleanLiteral:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.match(XonParser.BooleanLiteral);
				}
				break;
			case XonParser.NumberLiteral:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 338;
				this.match(XonParser.NumberLiteral);
				}
				break;
			case XonParser.CharLiteral:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 339;
				this.match(XonParser.CharLiteral);
				}
				break;
			case XonParser.StringLiteral:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 340;
				this.match(XonParser.StringLiteral);
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 19);

		case 10:
			return this.precpred(this._ctx, 18);

		case 11:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u015A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x07" +
		"\x02$\n\x02\f\x02\x0E\x02\'\v\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02" +
		"-\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E" +
		"\x037\v\x03\x03\x03\x05\x03:\n\x03\x03\x04\x03\x04\x03\x04\x07\x04?\n" +
		"\x04\f\x04\x0E\x04B\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04H\n\x04" +
		"\f\x04\x0E\x04K\v\x04\x03\x05\x03\x05\x03\x05\x05\x05P\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06U\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06[\n" +
		"\x06\r\x06\x0E\x06\\\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07k\n\x07\f\x07\x0E" +
		"\x07n\v\x07\x05\x07p\n\x07\x03\x07\x03\x07\x05\x07t\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07}\n\x07\x03\x07\x05" +
		"\x07\x80\n\x07\x03\x07\x05\x07\x83\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x8F\n\n\f\n\x0E\n\x92\v\n\x03\n\x03" +
		"\n\x05\n\x96\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x9F\n" +
		"\v\f\v\x0E\v\xA2\v\v\x03\v\x03\v\x05\v\xA6\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x05\v\xAC\n\v\x05\v\xAE\n\v\x03\v\x03\v\x05\v\xB2\n\v\x03\v\x05\v\xB5" +
		"\n\v\x03\v\x05\v\xB8\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xBE\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\xC6\n\v\x03\f\x03\f\x03\f\x03\f\x06\f" +
		"\xCC\n\f\r\f\x0E\f\xCD\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xDD\n\r\f\r\x0E\r\xE0\v\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xE9\n\r\f\r\x0E\r\xEC\v\r\x05\r" +
		"\xEE\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xF9" +
		"\n\r\f\r\x0E\r\xFC\v\r\x05\r\xFE\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0108\n\r\x03\r\x03\r\x03\r\x05\r\u010D\n\r\x07\r" +
		"\u010F\n\r\f\r\x0E\r\u0112\v\r\x05\r\u0114\n\r\x03\r\x03\r\x03\r\x05\r" +
		"\u0119\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0137\n\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\u013F\n\r\f\r\x0E\r\u0142\v\r\x05\r\u0144\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u014F\n" +
		"\r\f\r\x0E\r\u0152\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0158\n" +
		"\x0E\x03\x0E\x02\x02\x03\x18\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x07\x04" +
		"\x02\x1C\x1D\x1F \x03\x02\x1F!\x03\x02\x1C\x1D\x03\x02$\'\x03\x02()\x02" +
		"\u0194\x02\x1F\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06;\x03\x02\x02\x02" +
		"\bL\x03\x02\x02\x02\na\x03\x02\x02\x02\f\x82\x03\x02\x02\x02\x0E\x84\x03" +
		"\x02\x02\x02\x10\x86\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\xC5\x03" +
		"\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18\u0118\x03\x02\x02\x02\x1A\u0157" +
		"\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E!" +
		"\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 %\x03\x02" +
		"\x02\x02!\x1F\x03\x02\x02\x02\"$\x05\x14\v\x02#\"\x03\x02\x02\x02$\'\x03" +
		"\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&+\x03\x02\x02\x02\'%" +
		"\x03\x02\x02\x02(*\x05\n\x06\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+" +
		")\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02./\x05\x06\x04\x02/0\x07\x1A\x02\x0205\x05\b\x05\x0212\x07\x17\x02" +
		"\x0224\x05\b\x05\x0231\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02" +
		"\x0256\x03\x02\x02\x026:\x03\x02\x02\x0275\x03\x02\x02\x028:\x07\x10\x02" +
		"\x029.\x03\x02\x02\x0298\x03\x02\x02\x02:\x05\x03\x02\x02\x02;@\x07<\x02" +
		"\x02<=\x07\x1D\x02\x02=?\x07<\x02\x02><\x03\x02\x02\x02?B\x03\x02\x02" +
		"\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02" +
		"\x02CD\x07 \x02\x02DI\x07<\x02\x02EF\x07\x1D\x02\x02FH\x07<\x02\x02GE" +
		"\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"J\x07\x03\x02\x02\x02KI\x03\x02\x02\x02LO\x07<\x02\x02MN\x07\x07\x02\x02" +
		"NP\x07<\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\t\x03\x02\x02\x02" +
		"QT\x07<\x02\x02RS\x07\x06\x02\x02SU\x05\x12\n\x02TR\x03\x02\x02\x02TU" +
		"\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x07\x1A\x02\x02WX\x07\x10\x02\x02" +
		"XZ\x07\x03\x02\x02Y[\x05\f\x07\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\x04\x02" +
		"\x02_b\x03\x02\x02\x02`b\x07\x10\x02\x02aQ\x03\x02\x02\x02a`\x03\x02\x02" +
		"\x02b\v\x03\x02\x02\x02cd\x07<\x02\x02d\x83\x05\x12\n\x02ef\x07<\x02\x02" +
		"fo\x07\x13\x02\x02gl\x05\x10\t\x02hi\x07\x17\x02\x02ik\x05\x10\t\x02j" +
		"h\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02" +
		"mp\x03\x02\x02\x02nl\x03\x02\x02\x02og\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02qs\x07\x14\x02\x02rt\x05\x12\n\x02sr\x03\x02\x02\x02" +
		"st\x03\x02\x02\x02tu\x03\x02\x02\x02u\x83\x05\x16\f\x02vw\x07\x05\x02" +
		"\x02wx\x05\x0E\b\x02xy\x07\x13\x02\x02yz\x05\x10\t\x02z|\x07\x14\x02\x02" +
		"{}\x05\x12\n\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x03\x02\x02" +
		"\x02~\x80\x05\x16\f\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80" +
		"\x83\x03\x02\x02\x02\x81\x83\x07\x10\x02\x02\x82c\x03\x02\x02\x02\x82" +
		"e\x03\x02\x02\x02\x82v\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\r\x03" +
		"\x02\x02\x02\x84\x85\t\x02\x02\x02\x85\x0F\x03\x02\x02\x02\x86\x87\x07" +
		"<\x02\x02\x87\x88\x05\x12\n\x02\x88\x11\x03\x02\x02\x02\x89\x95\x07<\x02" +
		"\x02\x8A\x8B\x07$\x02\x02\x8B\x90\x05\x12\n\x02\x8C\x8D\x07\x17\x02\x02" +
		"\x8D\x8F\x05\x12\n\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02" +
		"\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02" +
		"\x92\x90\x03\x02\x02\x02\x93\x94\x07%\x02\x02\x94\x96\x03\x02\x02\x02" +
		"\x95\x8A\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x13\x03\x02\x02\x02" +
		"\x97\x98\x07\b\x02\x02\x98\x99\x05\x18\r\x02\x99\xA0\x05\x16\f\x02\x9A" +
		"\x9B\x07\n\x02\x02\x9B\x9C\x05\x18\r\x02\x9C\x9D\x05\x16\f\x02\x9D\x9F" +
		"\x03\x02\x02\x02\x9E\x9A\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E" +
		"\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA5\x03\x02\x02\x02\xA2\xA0" +
		"\x03\x02\x02\x02\xA3\xA4\x07\t\x02\x02\xA4\xA6\x05\x16\f\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xC6\x03\x02\x02\x02\xA7\xB7\x07" +
		"\v\x02\x02\xA8\xAD\x07<\x02\x02\xA9\xAB\x07\x17\x02\x02\xAA\xAC\x07<\x02" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02" +
		"\x02\xAD\xA9\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02" +
		"\x02\xAF\xB0\x07\x17\x02\x02\xB0\xB2\x07<\x02\x02\xB1\xAF\x03\x02\x02" +
		"\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x07\f\x02" +
		"\x02\xB4\xA8\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
		"\x02\xB6\xB8\x05\x18\r\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC6\x05\x16\f\x02\xBA\xC6\x07\r\x02\x02" +
		"\xBB\xBD\x07\x0E\x02\x02\xBC\xBE\x05\x18\r\x02\xBD\xBC\x03\x02\x02\x02" +
		"\xBD\xBE\x03\x02\x02\x02\xBE\xC6\x03\x02\x02\x02\xBF\xC0\x07<\x02\x02" +
		"\xC0\xC1\x07\x18\x02\x02\xC1\xC6\x05\x18\r\x02\xC2\xC6\x05\x18\r\x02\xC3" +
		"\xC6\x07\x0F\x02\x02\xC4\xC6\x07\x10\x02\x02\xC5\x97\x03\x02\x02\x02\xC5" +
		"\xA7\x03\x02\x02\x02\xC5\xBA\x03\x02\x02\x02\xC5\xBB\x03\x02\x02\x02\xC5" +
		"\xBF\x03\x02\x02\x02\xC5\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5" +
		"\xC4\x03\x02\x02\x02\xC6\x15\x03\x02\x02\x02\xC7\xC8\x07\x1A\x02\x02\xC8" +
		"\xC9\x07\x10\x02\x02\xC9\xCB\x07\x03\x02\x02\xCA\xCC\x05\x14\v\x02\xCB" +
		"\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD" +
		"\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x07\x04\x02\x02\xD0" +
		"\x17\x03\x02\x02\x02\xD1\xD2\b\r\x01\x02\xD2\u0119\x07<\x02\x02\xD3\u0119" +
		"\x05\x1A\x0E\x02\xD4\xD5\x07\x1D\x02\x02\xD5\u0119\x05\x18\r\x11\xD6\xD7" +
		"\x07\x1E\x02\x02\xD7\u0119\x05\x18\r\x10\xD8\xDE\x079\x02\x02\xD9\xDA" +
		"\x05\x18\r\x02\xDA\xDB\x07:\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xD9\x03" +
		"\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE2\x05" +
		"\x18\r\x02\xE2\xE3\x07;\x02\x02\xE3\u0119\x03\x02\x02\x02\xE4\xED\x07" +
		"\x11\x02\x02\xE5\xEA\x05\x18\r\x02\xE6\xE7\x07\x17\x02\x02\xE7\xE9\x05" +
		"\x18\r\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xED\xE5\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03" +
		"\x02\x02\x02\xEF\u0119\x07\x12\x02\x02\xF0\xFD\x07\x15\x02\x02\xF1\xF2" +
		"\x07<\x02\x02\xF2\xF3\x07\x1A\x02\x02\xF3\xFA\x05\x18\r\x02\xF4\xF5\x07" +
		"\x17\x02\x02\xF5\xF6\x07<\x02\x02\xF6\xF7\x07\x1A\x02\x02\xF7\xF9\x05" +
		"\x18\r\x02\xF8\xF4\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03" +
		"\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03" +
		"\x02\x02\x02\xFD\xF1\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03" +
		"\x02\x02\x02\xFF\u0119\x07\x16\x02\x02\u0100\u0101\x07\x13\x02\x02\u0101" +
		"\u0102\x05\x18\r\x02\u0102\u0103\x07\x14\x02\x02\u0103\u0119\x03\x02\x02" +
		"\x02\u0104\u0113\x07\x13\x02\x02\u0105\u0107\x07<\x02\x02\u0106\u0108" +
		"\x05\x12\n\x02\u0107\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108\u0110\x03\x02\x02\x02\u0109\u010A\x07\x17\x02\x02\u010A\u010C\x07" +
		"<\x02\x02\u010B\u010D\x05\x12\n\x02\u010C\u010B\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u010F\x03\x02\x02\x02\u010E\u0109\x03\x02" +
		"\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02" +
		"\x02\x02\u0113\u0105\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\u0116\x07\x14\x02\x02\u0116\u0117\x07\x1A" +
		"\x02\x02\u0117\u0119\x05\x18\r\x03\u0118\xD1\x03\x02\x02\x02\u0118\xD3" +
		"\x03\x02\x02\x02\u0118\xD4\x03\x02\x02\x02\u0118\xD6\x03\x02\x02\x02\u0118" +
		"\xD8\x03\x02\x02\x02\u0118\xE4\x03\x02\x02\x02\u0118\xF0\x03\x02\x02\x02" +
		"\u0118\u0100\x03\x02\x02\x02\u0118\u0104\x03\x02\x02\x02\u0119\u0150\x03" +
		"\x02\x02\x02\u011A\u011B\f\x12\x02\x02\u011B\u011C\x07\"\x02\x02\u011C" +
		"\u014F\x05\x18\r\x13\u011D\u011E\f\x0F\x02\x02\u011E\u011F\t\x03\x02\x02" +
		"\u011F\u014F\x05\x18\r\x10\u0120\u0121\f\x0E\x02\x02\u0121\u0122\t\x04" +
		"\x02\x02\u0122\u014F\x05\x18\r\x0F\u0123\u0124\f\r\x02\x02\u0124\u0125" +
		"\t\x05\x02\x02\u0125\u014F\x05\x18\r\x0E\u0126\u0127\f\f\x02\x02\u0127" +
		"\u0128\t\x06\x02\x02\u0128\u014F\x05\x18\r\r\u0129\u012A\f\v\x02\x02\u012A" +
		"\u012B\x07*\x02\x02\u012B\u014F\x05\x18\r\f\u012C\u012D\f\n\x02\x02\u012D" +
		"\u012E\x07+\x02\x02\u012E\u014F\x05\x18\r\v\u012F\u0130\f\t\x02\x02\u0130" +
		"\u0131\x073\x02\x02\u0131\u014F\x05\x18\r\n\u0132\u0133\f\x04\x02\x02" +
		"\u0133\u0136\x071\x02\x02\u0134\u0135\x07<\x02\x02\u0135\u0137\x07\x1A" +
		"\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137" +
		"\u0138\x03\x02\x02\x02\u0138\u014F\x05\x18\r\x05\u0139\u013A\f\x15\x02" +
		"\x02\u013A\u0143\x07\x13\x02\x02\u013B\u0140\x05\x18\r\x02\u013C\u013D" +
		"\x07\x17\x02\x02\u013D\u013F\x05\x18\r\x02\u013E\u013C\x03\x02\x02\x02" +
		"\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03" +
		"\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143" +
		"\u013B\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u014F\x07\x14\x02\x02\u0146\u0147\f\x14\x02\x02\u0147\u0148" +
		"\x07\x11\x02\x02\u0148\u0149\x05\x18\r\x02\u0149\u014A\x07\x12\x02\x02" +
		"\u014A\u014F\x03\x02\x02\x02\u014B\u014C\f\x13\x02\x02\u014C\u014D\x07" +
		"\x1B\x02\x02\u014D\u014F\x07<\x02\x02\u014E\u011A\x03\x02\x02\x02\u014E" +
		"\u011D\x03\x02\x02\x02\u014E\u0120\x03\x02\x02\x02\u014E\u0123\x03\x02" +
		"\x02\x02\u014E\u0126\x03\x02\x02\x02\u014E\u0129\x03\x02\x02\x02\u014E" +
		"\u012C\x03\x02\x02\x02\u014E\u012F\x03\x02\x02\x02\u014E\u0132\x03\x02" +
		"\x02\x02\u014E\u0139\x03\x02\x02\x02\u014E\u0146\x03\x02\x02\x02\u014E" +
		"\u014B\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02" +
		"\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\x19\x03\x02\x02\x02\u0152\u0150" +
		"\x03\x02\x02\x02\u0153\u0158\x075\x02\x02\u0154\u0158\x076\x02\x02\u0155" +
		"\u0158\x077\x02\x02\u0156\u0158\x078\x02\x02\u0157\u0153\x03\x02\x02\x02" +
		"\u0157\u0154\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0156\x03" +
		"\x02\x02\x02\u0158\x1B\x03\x02\x02\x02/\x1F%+59@IOT\\alos|\x7F\x82\x90" +
		"\x95\xA0\xA5\xAB\xAD\xB1\xB4\xB7\xBD\xC5\xCD\xDE\xEA\xED\xFA\xFD\u0107" +
		"\u010C\u0110\u0113\u0118\u0136\u0140\u0143\u014E\u0150\u0157";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
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
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class LibraryContext extends ParserRuleContext {
	public libraryPath(): LibraryPathContext | undefined {
		return this.tryGetRuleContext(0, LibraryPathContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	public LineBreak(): TerminalNode | undefined { return this.tryGetToken(XonParser.LineBreak, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class LibraryPathContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Slash(): TerminalNode { return this.getToken(XonParser.Slash, 0); }
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Minus);
		} else {
			return this.getToken(XonParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPath; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: Token;
	public _alias!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(XonParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(XonParser.DEDENT, 0); }
	public Is(): TerminalNode | undefined { return this.tryGetToken(XonParser.Is, 0); }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixOperatorMemberContext extends MemberContext {
	public Infix(): TerminalNode { return this.getToken(XonParser.Infix, 0); }
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public argument(): ArgumentContext {
		return this.getRuleContext(0, ArgumentContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakMemberContext extends MemberContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ArgumentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class TypeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
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
export class IfStatementContext extends StatementContext {
	public If(): TerminalNode { return this.getToken(XonParser.If, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
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
	public ElseIf(): TerminalNode[];
	public ElseIf(i: number): TerminalNode;
	public ElseIf(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ElseIf);
		} else {
			return this.getToken(XonParser.ElseIf, i);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(XonParser.Else, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value!: Token;
	public _key!: Token;
	public _index!: Token;
	public Loop(): TerminalNode { return this.getToken(XonParser.Loop, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public In(): TerminalNode | undefined { return this.tryGetToken(XonParser.In, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public Break(): TerminalNode { return this.getToken(XonParser.Break, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public Return(): TerminalNode { return this.getToken(XonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public Assign(): TerminalNode { return this.getToken(XonParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class PreprocessorStatementContext extends StatementContext {
	public Preprocessor(): TerminalNode { return this.getToken(XonParser.Preprocessor, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LineBreakStatementContext extends StatementContext {
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public LineBreak(): TerminalNode { return this.getToken(XonParser.LineBreak, 0); }
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
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
	public get ruleIndex(): number { return XonParser.RULE_body; }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
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
export class FunctionExpressionContext extends ExpressionContext {
	public _object!: ExpressionContext;
	public _expression!: ExpressionContext;
	public _args: ExpressionContext[] = [];
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public _value!: ExpressionContext;
	public _index!: ExpressionContext;
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(XonParser.Dot, 0); }
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExpressionContext {
	public _base!: ExpressionContext;
	public _exponent!: ExpressionContext;
	public Caret(): TerminalNode { return this.getToken(XonParser.Caret, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(XonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalNotExpressionContext extends ExpressionContext {
	public Exclamation(): TerminalNode { return this.getToken(XonParser.Exclamation, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
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
	public Asterisk(): TerminalNode | undefined { return this.tryGetToken(XonParser.Asterisk, 0); }
	public Slash(): TerminalNode | undefined { return this.tryGetToken(XonParser.Slash, 0); }
	public Modulo(): TerminalNode | undefined { return this.tryGetToken(XonParser.Modulo, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
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
	public Plus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(XonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
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
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.LessThanEquals, 0); }
	public MoreThanEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThanEquals, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(XonParser.MoreThan, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operation!: Token;
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
	public Equals(): TerminalNode | undefined { return this.tryGetToken(XonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(XonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public And(): TerminalNode { return this.getToken(XonParser.And, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Or(): TerminalNode { return this.getToken(XonParser.Or, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExpressionContext {
	public _min!: ExpressionContext;
	public _max!: ExpressionContext;
	public Range(): TerminalNode { return this.getToken(XonParser.Range, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringFormatExpressionContext extends ExpressionContext {
	public StringFormatStart(): TerminalNode { return this.getToken(XonParser.StringFormatStart, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public StringFormatEnd(): TerminalNode { return this.getToken(XonParser.StringFormatEnd, 0); }
	public StringFormatMiddle(): TerminalNode[];
	public StringFormatMiddle(i: number): TerminalNode;
	public StringFormatMiddle(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.StringFormatMiddle);
		} else {
			return this.getToken(XonParser.StringFormatMiddle, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OpenBracket(): TerminalNode { return this.getToken(XonParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(XonParser.CloseBracket, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExpressionContext {
	public OpenBrace(): TerminalNode { return this.getToken(XonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(XonParser.CloseBrace, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Colon);
		} else {
			return this.getToken(XonParser.Colon, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PipeExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	public Pipe(): TerminalNode { return this.getToken(XonParser.Pipe, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(XonParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(XonParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(XonParser.CloseParen, 0); }
	public Colon(): TerminalNode { return this.getToken(XonParser.Colon, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.Comma);
		} else {
			return this.getToken(XonParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
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
export class BooleanLiteralContext extends LiteralContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(XonParser.BooleanLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NumberLiteral(): TerminalNode { return this.getToken(XonParser.NumberLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharLiteralContext extends LiteralContext {
	public CharLiteral(): TerminalNode { return this.getToken(XonParser.CharLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(XonParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


