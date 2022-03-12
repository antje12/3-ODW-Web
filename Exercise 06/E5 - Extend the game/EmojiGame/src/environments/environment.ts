/*
 * PaletteFontChooserPreviewPanel.java
 *
 * Created on 21. Mai 2008, 07:02
 */

package org.jhotdraw.gui.plaf.palette;

import java.awt.*;
import javax.swing.plaf.LabelUI;
import org.jhotdraw.gui.JFontChooser;

/**
 *
 * @author  werni
 */
public class PaletteFontChooserPreviewPanel extends javax.swing.JPanel {
    
    /** Creates new form PaletteFontChooserPreviewPanel */
    public PaletteFontChooserPreviewPanel() {
        initComponents();
        
        previewLabel.setUI((LabelUI) PaletteLabelUI.createUI(previewLabel));
        previewLabel.setBackground(Color.WHITE);
        previewLabel.setForeground(Color.BLACK);
