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
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly CONTINUE = 11;
	public static readonly DO = 12;
	public static readonly ELSE = 13;
	public static readonly EXPECT = 14;
	public static readonly EXPORT = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly AND = 21;
	public static readonly AS = 22;
	public static readonly IS = 23;
	public static readonly OR = 24;
	public static readonly ASSIGN = 25;
	public static readonly COMMA = 26;
	public static readonly QUESTION = 27;
	public static readonly DOT = 28;
	public static readonly COLON = 29;
	public static readonly LAMBDA = 30;
	public static readonly FLOAT_LITERAL = 31;
	public static readonly INTEGER_LITERAL = 32;
	public static readonly STRING_LITERAL = 33;
	public static readonly PREPROCESSOR = 34;
	public static readonly ID = 35;
	public static readonly OP = 36;
	public static readonly NL = 37;
	public static readonly WS = 38;
	public static readonly BLOCK_COMMENT = 39;
	public static readonly LINE_COMMENT = 40;
	public static readonly UNEXPECTED = 41;
	public static readonly LINE_JOINING = 42;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_argument = 4;
	public static readonly RULE_arguments = 5;
	public static readonly RULE_parameter = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_body = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expression", "literal", "argument", "arguments", 
		"parameter", "parameters", "body",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'import'", "'return'", "'while'", "'and'", "'as'", "'is'", 
		"'or'", "'='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "IMPORT", "RETURN", "WHILE", 
		"AND", "AS", "IS", "OR", "ASSIGN", "COMMA", "QUESTION", "DOT", "COLON", 
		"LAMBDA", "FLOAT_LITERAL", "INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "OP", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", 
		"LINE_JOINING",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OP - 32)) | (1 << (XonParser.NL - 32)))) !== 0)) {
				{
				this.state = 20;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.BREAK:
				case XonParser.CONTINUE:
				case XonParser.DO:
				case XonParser.EXPORT:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.RETURN:
				case XonParser.WHILE:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
				case XonParser.OP:
					{
					this.state = 18;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 19;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 24;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new DefinitionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 25;
				(_localctx as DefinitionStatementContext)._modifier = this.match(XonParser.ID);
				this.state = 26;
				(_localctx as DefinitionStatementContext)._name = this.match(XonParser.ID);
				this.state = 28;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 27;
					this.parameters();
					}
					break;
				}
				this.state = 31;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 30;
					this.expression(0);
					}
					break;
				}
				this.state = 42;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 33;
					this.match(XonParser.NL);
					this.state = 34;
					this.match(XonParser.INDENT);
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						this.state = 37;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case XonParser.OPEN_BRACKET:
						case XonParser.OPEN_PAREN:
						case XonParser.OPEN_BRACE:
						case XonParser.ID:
							{
							this.state = 35;
							this.parameter();
							}
							break;
						case XonParser.NL:
							{
							this.state = 36;
							this.match(XonParser.NL);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						this.state = 39;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
					this.state = 41;
					this.match(XonParser.DEDENT);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new OperatorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				(_localctx as OperatorStatementContext)._modifier = this.match(XonParser.ID);
				this.state = 45;
				(_localctx as OperatorStatementContext)._name = this.match(XonParser.OP);
				this.state = 47;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 46;
					(_localctx as OperatorStatementContext)._type = this.expression(0);
					}
					break;
				}
				this.state = 50;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					this.body();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				this.match(XonParser.EXPORT);
				this.state = 53;
				(_localctx as ExportStatementContext)._path = this.expression(0);
				}
				break;

			case 4:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
				this.match(XonParser.FOR);
				this.state = 62;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 55;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 56;
						this.match(XonParser.COMMA);
						this.state = 57;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 60;
					this.match(XonParser.ID);
					}
					break;
				}
				this.state = 64;
				this.expression(0);
				this.state = 65;
				this.body();
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 67;
				this.match(XonParser.WHILE);
				this.state = 68;
				this.expression(0);
				this.state = 69;
				this.body();
				}
				break;

			case 6:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 71;
				this.match(XonParser.DO);
				this.state = 72;
				this.body();
				this.state = 73;
				this.match(XonParser.WHILE);
				this.state = 74;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 76;
				this.match(XonParser.IF);
				this.state = 77;
				this.expression(0);
				this.state = 78;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 79;
					this.match(XonParser.ELSE);
					this.state = 80;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 83;
				this.match(XonParser.BREAK);
				}
				break;

			case 9:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 84;
				this.match(XonParser.CONTINUE);
				}
				break;

			case 10:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 85;
				this.match(XonParser.RETURN);
				this.state = 87;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 86;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 11:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 89;
				this.match(XonParser.ACTUAL);
				this.state = 90;
				(_localctx as AssertStatementContext)._actual = this.expression(0);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 91;
					this.match(XonParser.NL);
					}
					}
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 96;
				this.match(XonParser.EXPECT);
				this.state = 97;
				(_localctx as AssertStatementContext)._expect = this.expression(0);
				}
				break;

			case 12:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 99;
				this.expression(0);
				}
				break;

			case 13:
				_localctx = new ParameterStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 100;
				this.parameter();
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
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				_localctx = new PreprocessorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 104;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 2:
				{
				_localctx = new GroupExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 105;
				this.match(XonParser.OPEN_PAREN);
				this.state = 106;
				this.expression(0);
				this.state = 107;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 3:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				this.arguments();
				}
				break;

			case 4:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 110;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === XonParser.IMPORT || _la === XonParser.OP)) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 111;
				this.expression(5);
				}
				break;

			case 5:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				(_localctx as IdExpressionContext)._name = this.match(XonParser.ID);
				}
				break;

			case 6:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.parameters();
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
					{
					this.state = 114;
					(_localctx as MethodExpressionContext)._type = this.expression(0);
					}
				}

				this.state = 117;
				this.match(XonParser.LAMBDA);
				this.state = 118;
				(_localctx as MethodExpressionContext)._value = this.expression(2);
				}
				break;

			case 7:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 135;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 133;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 123;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 124;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (XonParser.AND - 21)) | (1 << (XonParser.AS - 21)) | (1 << (XonParser.IS - 21)) | (1 << (XonParser.OR - 21)) | (1 << (XonParser.OP - 21)))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 125;
						(_localctx as InfixExpressionContext)._right = this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new NullableExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 126;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 127;
						this.match(XonParser.QUESTION);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 128;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 129;
						this.match(XonParser.DOT);
						this.state = 130;
						(_localctx as MemberExpressionContext)._name = this.match(XonParser.ID);
						}
						break;

					case 4:
						{
						_localctx = new InvokeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 131;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 132;
						this.arguments();
						}
						break;
					}
					}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 138;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 143;
				_localctx._name = this.match(XonParser.ID);
				this.state = 144;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 147;
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
		this.enterRule(_localctx, 10, XonParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.IMPORT) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OP - 32)))) !== 0)) {
				{
				this.state = 150;
				this.argument();
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 151;
						this.match(XonParser.COMMA);
						this.state = 152;
						this.argument();
						}
						}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 158;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 163;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
				_localctx._close = this._errHandler.recoverInline(this);
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
		this.enterRule(_localctx, 12, XonParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				this.state = 165;
				_localctx._name = this.match(XonParser.ID);
				}
				break;
			case XonParser.OPEN_BRACKET:
			case XonParser.OPEN_PAREN:
			case XonParser.OPEN_BRACE:
				{
				this.state = 166;
				this.parameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				_localctx._type = this.expression(0);
				}
				break;
			}
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 172;
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			_localctx._open = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0))) {
				_localctx._open = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE))) !== 0) || _la === XonParser.ID) {
				{
				this.state = 176;
				this.parameter();
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 177;
						this.match(XonParser.COMMA);
						this.state = 178;
						this.parameter();
						}
						}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 184;
					this.match(XonParser.COMMA);
					}
				}

				}
			}

			this.state = 189;
			_localctx._close = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.CLOSE_BRACKET) | (1 << XonParser.CLOSE_PAREN) | (1 << XonParser.CLOSE_BRACE))) !== 0))) {
				_localctx._close = this._errHandler.recoverInline(this);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ASSIGN:
			case XonParser.COLON:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 191;
				_la = this._input.LA(1);
				if (!(_la === XonParser.ASSIGN || _la === XonParser.COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 192;
				this.statement();
				}
				break;
			case XonParser.NL:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.match(XonParser.NL);
				this.state = 194;
				this.match(XonParser.INDENT);
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 197;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.CONTINUE:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.RETURN:
					case XonParser.WHILE:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
					case XonParser.OP:
						{
						this.state = 195;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 196;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CONTINUE) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.RETURN) | (1 << XonParser.WHILE) | (1 << XonParser.FLOAT_LITERAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.INTEGER_LITERAL - 32)) | (1 << (XonParser.STRING_LITERAL - 32)) | (1 << (XonParser.PREPROCESSOR - 32)) | (1 << (XonParser.ID - 32)) | (1 << (XonParser.OP - 32)) | (1 << (XonParser.NL - 32)))) !== 0));
				this.state = 201;
				this.match(XonParser.DEDENT);
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
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\xCF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x07\x02\x17\n\x02" +
		"\f\x02\x0E\x02\x1A\v\x02\x03\x03\x03\x03\x03\x03\x05\x03\x1F\n\x03\x03" +
		"\x03\x05\x03\"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03(\n\x03\r" +
		"\x03\x0E\x03)\x03\x03\x05\x03-\n\x03\x03\x03\x03\x03\x03\x03\x05\x032" +
		"\n\x03\x03\x03\x05\x035\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03=\n\x03\x03\x03\x03\x03\x05\x03A\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03T\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03Z\n\x03\x03\x03\x03\x03\x03\x03\x06\x03" +
		"_\n\x03\r\x03\x0E\x03`\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"h\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04v\n\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04|\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x88\n\x04\f\x04\x0E\x04\x8B\v" +
		"\x04\x03\x05\x03\x05\x03\x05\x05\x05\x90\n\x05\x03\x06\x03\x06\x05\x06" +
		"\x94\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9C" +
		"\n\x07\f\x07\x0E\x07\x9F\v\x07\x03\x07\x05\x07\xA2\n\x07\x05\x07\xA4\n" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b\xAA\n\b\x03\b\x05\b\xAD\n\b\x03" +
		"\b\x05\b\xB0\n\b\x03\t\x03\t\x03\t\x03\t\x07\t\xB6\n\t\f\t\x0E\t\xB9\v" +
		"\t\x03\t\x05\t\xBC\n\t\x05\t\xBE\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x06\n\xC8\n\n\r\n\x0E\n\xC9\x03\n\x05\n\xCD\n\n\x03\n\x02" +
		"\x02\x03\x06\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x02\x07\x04\x02\x14\x14&&\x04\x02\x17\x1A&&\x05\x02\x05\x05\x07" +
		"\x07\t\t\x05\x02\x06\x06\b\b\n\n\x04\x02\x1B\x1B\x1F\x1F\x02\xF9\x02\x18" +
		"\x03\x02\x02\x02\x04g\x03\x02\x02\x02\x06{\x03\x02\x02\x02\b\x8F\x03\x02" +
		"\x02\x02\n\x93\x03\x02\x02\x02\f\x97\x03\x02\x02\x02\x0E\xA9\x03\x02\x02" +
		"\x02\x10\xB1\x03\x02\x02\x02\x12\xCC\x03\x02\x02\x02\x14\x17\x05\x04\x03" +
		"\x02\x15\x17\x07\'\x02\x02\x16\x14\x03\x02\x02\x02\x16\x15\x03\x02\x02" +
		"\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02" +
		"\x02\x19\x03\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07%\x02" +
		"\x02\x1C\x1E\x07%\x02\x02\x1D\x1F\x05\x10\t\x02\x1E\x1D\x03\x02\x02\x02" +
		"\x1E\x1F\x03\x02\x02\x02\x1F!\x03\x02\x02\x02 \"\x05\x06\x04\x02! \x03" +
		"\x02\x02\x02!\"\x03\x02\x02\x02\",\x03\x02\x02\x02#$\x07\'\x02\x02$\'" +
		"\x07\x03\x02\x02%(\x05\x0E\b\x02&(\x07\'\x02\x02\'%\x03\x02\x02\x02\'" +
		"&\x03\x02\x02\x02()\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+-\x07\x04\x02\x02,#\x03\x02\x02\x02,-\x03\x02\x02\x02" +
		"-h\x03\x02\x02\x02./\x07%\x02\x02/1\x07&\x02\x0202\x05\x06\x04\x0210\x03" +
		"\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0235\x05\x12\n\x0243\x03" +
		"\x02\x02\x0245\x03\x02\x02\x025h\x03\x02\x02\x0267\x07\x11\x02\x027h\x05" +
		"\x06\x04\x028@\x07\x12\x02\x029<\x05\x0E\b\x02:;\x07\x1C\x02\x02;=\x05" +
		"\x0E\b\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x07" +
		"%\x02\x02?A\x03\x02\x02\x02@9\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03" +
		"\x02\x02\x02BC\x05\x06\x04\x02CD\x05\x12\n\x02Dh\x03\x02\x02\x02EF\x07" +
		"\x16\x02\x02FG\x05\x06\x04\x02GH\x05\x12\n\x02Hh\x03\x02\x02\x02IJ\x07" +
		"\x0E\x02\x02JK\x05\x12\n\x02KL\x07\x16\x02\x02LM\x05\x06\x04\x02Mh\x03" +
		"\x02\x02\x02NO\x07\x13\x02\x02OP\x05\x06\x04\x02PS\x05\x12\n\x02QR\x07" +
		"\x0F\x02\x02RT\x05\x12\n\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02Th\x03" +
		"\x02\x02\x02Uh\x07\f\x02\x02Vh\x07\r\x02\x02WY\x07\x15\x02\x02XZ\x05\x06" +
		"\x04\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Zh\x03\x02\x02\x02[\\\x07" +
		"\v\x02\x02\\^\x05\x06\x04\x02]_\x07\'\x02\x02^]\x03\x02\x02\x02_`\x03" +
		"\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07" +
		"\x10\x02\x02cd\x05\x06\x04\x02dh\x03\x02\x02\x02eh\x05\x06\x04\x02fh\x05" +
		"\x0E\b\x02g\x1B\x03\x02\x02\x02g.\x03\x02\x02\x02g6\x03\x02\x02\x02g8" +
		"\x03\x02\x02\x02gE\x03\x02\x02\x02gI\x03\x02\x02\x02gN\x03\x02\x02\x02" +
		"gU\x03\x02\x02\x02gV\x03\x02\x02\x02gW\x03\x02\x02\x02g[\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02gf\x03\x02\x02\x02h\x05\x03\x02\x02\x02ij\b\x04\x01" +
		"\x02j|\x07$\x02\x02kl\x07\x07\x02\x02lm\x05\x06\x04\x02mn\x07\b\x02\x02" +
		"n|\x03\x02\x02\x02o|\x05\f\x07\x02pq\t\x02\x02\x02q|\x05\x06\x04\x07r" +
		"|\x07%\x02\x02su\x05\x10\t\x02tv\x05\x06\x04\x02ut\x03\x02\x02\x02uv\x03" +
		"\x02\x02\x02vw\x03\x02\x02\x02wx\x07 \x02\x02xy\x05\x06\x04\x04y|\x03" +
		"\x02\x02\x02z|\x05\b\x05\x02{i\x03\x02\x02\x02{k\x03\x02\x02\x02{o\x03" +
		"\x02\x02\x02{p\x03\x02\x02\x02{r\x03\x02\x02\x02{s\x03\x02\x02\x02{z\x03" +
		"\x02\x02\x02|\x89\x03\x02\x02\x02}~\f\x06\x02\x02~\x7F\t\x03\x02\x02\x7F" +
		"\x88\x05\x06\x04\x07\x80\x81\f\n\x02\x02\x81\x88\x07\x1D\x02\x02\x82\x83" +
		"\f\t\x02\x02\x83\x84\x07\x1E\x02\x02\x84\x88\x07%\x02\x02\x85\x86\f\b" +
		"\x02\x02\x86\x88\x05\f\x07\x02\x87}\x03\x02\x02\x02\x87\x80\x03\x02\x02" +
		"\x02\x87\x82\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8B\x03\x02\x02" +
		"\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x07\x03\x02\x02" +
		"\x02\x8B\x89\x03\x02\x02\x02\x8C\x90\x07\"\x02\x02\x8D\x90\x07!\x02\x02" +
		"\x8E\x90\x07#\x02\x02\x8F\x8C\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02" +
		"\x8F\x8E\x03\x02\x02\x02\x90\t\x03\x02\x02\x02\x91\x92\x07%\x02\x02\x92" +
		"\x94\x07\x1F\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x95\x03\x02\x02\x02\x95\x96\x05\x06\x04\x02\x96\v\x03\x02\x02\x02\x97" +
		"\xA3\t\x04\x02\x02\x98\x9D\x05\n\x06\x02\x99\x9A\x07\x1C\x02\x02\x9A\x9C" +
		"\x05\n\x06\x02\x9B\x99\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D" +
		"\x03\x02\x02\x02\xA0\xA2\x07\x1C\x02\x02\xA1\xA0\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\x98\x03\x02\x02\x02\xA3\xA4" +
		"\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\t\x05\x02\x02\xA6\r\x03" +
		"\x02\x02\x02\xA7\xAA\x07%\x02\x02\xA8\xAA\x05\x10\t\x02\xA9\xA7\x03\x02" +
		"\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xAD\x05\x06" +
		"\x04\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02" +
		"\x02\x02\xAE\xB0\x05\x12\n\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\x0F\x03\x02\x02\x02\xB1\xBD\t\x04\x02\x02\xB2\xB7\x05\x0E" +
		"\b\x02\xB3\xB4\x07\x1C\x02\x02\xB4\xB6\x05\x0E\b\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x07\x1C\x02" +
		"\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02" +
		"\x02\xBD\xB2\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02" +
		"\x02\xBF\xC0\t\x05\x02\x02\xC0\x11\x03\x02\x02\x02\xC1\xC2\t\x06\x02\x02" +
		"\xC2\xCD\x05\x04\x03\x02\xC3\xC4\x07\'\x02\x02\xC4\xC7\x07\x03\x02\x02" +
		"\xC5\xC8\x05\x04\x03\x02\xC6\xC8\x07\'\x02\x02\xC7\xC5\x03\x02\x02\x02" +
		"\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x07\x04\x02\x02" +
		"\xCC\xC1\x03\x02\x02\x02\xCC\xC3\x03\x02\x02\x02\xCD\x13\x03\x02\x02\x02" +
		"#\x16\x18\x1E!\'),14<@SY`gu{\x87\x89\x8F\x93\x9D\xA1\xA3\xA9\xAC\xAF\xB7" +
		"\xBB\xBD\xC7\xC9\xCC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
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
export class DefinitionStatementContext extends StatementContext {
	public _modifier!: Token;
	public _name!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ID);
		} else {
			return this.getToken(XonParser.ID, i);
		}
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorStatementContext extends StatementContext {
	public _modifier!: Token;
	public _name!: Token;
	public _type!: ExpressionContext;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	public OP(): TerminalNode { return this.getToken(XonParser.OP, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExpressionContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: ParameterContext;
	public _index!: ParameterContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
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
export class ContinueStatementContext extends StatementContext {
	public CONTINUE(): TerminalNode { return this.getToken(XonParser.CONTINUE, 0); }
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
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParameterStatementContext extends StatementContext {
	public parameter(): ParameterContext {
		return this.getRuleContext(0, ParameterContext);
	}
	constructor(ctx: StatementContext) {
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
export class PreprocessorExpressionContext extends ExpressionContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GroupExpressionContext extends ExpressionContext {
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
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
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
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
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
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(XonParser.IMPORT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExpressionContext {
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(XonParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(XonParser.OR, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(XonParser.OP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public _name!: Token;
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public _type!: ExpressionContext;
	public _value!: ExpressionContext;
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public LAMBDA(): TerminalNode { return this.getToken(XonParser.LAMBDA, 0); }
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
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
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
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public _name!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class ArgumentsContext extends ParserRuleContext {
	public _open!: Token;
	public _close!: Token;
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
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


export class ParameterContext extends ParserRuleContext {
	public _name!: Token;
	public _type!: ExpressionContext;
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ParametersContext extends ParserRuleContext {
	public _open!: Token;
	public _close!: Token;
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACE, 0); }
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_BRACKET, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
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


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleBodyContext extends BodyContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MultipleBodyContext extends BodyContext {
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


