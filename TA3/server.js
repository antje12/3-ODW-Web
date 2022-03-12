/*
 * @(#)FontFormatter.java  1.0  2009-04-17
 * 
 * Copyright (c) 2009 by the original authors of JHotDraw
 * and all its contributors.
 * All rights reserved.
 * 
 * The copyright of this software is owned by the authors and  
 * contributors of the JHotDraw project ("the copyright holders").  
 * You may not use, copy or modify this software, except in  
 * accordance with the license agreement you entered into with  
 * the copyright holders. For details see accompanying license terms. 
 */
package org.jhotdraw.text;

import java.awt.Font;
import java.text.ParseException;
import javax.swing.JFormattedTextField.AbstractFormatterFactory;
import javax.swing.text.DefaultFormatter;
import javax.swing.text.DefaultFormatterFactory;

/**
 * {@code FontFormatter} is used to format fonts into a textual representation
 * which can be edited in an entry field.
 * <p>
 *
 * @author Werner Randelshofer
 * @version 1.0 2009-04-17 Created.
 */
public class FontFormatter extends DefaultFormatter {

    /**
     * Specifies whether the formatter allows null values.
     */
    private boolean allowsNullValue = false;

    public FontFormatter() {
        this(true);
    }

    public FontFormatter(boolean allowsNullValue) {
        this.allowsNullValue = allowsNullValue;
        setOverwriteMode(false);
    }

    /**
     * Sets whether a null value is allowed.
     * @param newValue
     */
    public void setAllowsNullValue(boolean newValue) {
        allowsNullValue = newValue;
    }