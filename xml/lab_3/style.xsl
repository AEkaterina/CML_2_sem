<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "/">
    <html>
        <body>
            <h2 align = "center" style="color: teal">Список университетов со специальностью ПОИТ</h2>
            <table border = "1">
                <tr bgcolor="MediumAquamarine">
                    <th style="text-align: center">Университет</th>
                    <th style="text-align: center">Проходной балл</th>
                    <th style="text-align: center">План набора</th>
                    <th style="text-align: center">Город</th>
                </tr>
                <xsl:for-each select="speciality/university">
                    <tr>
                        <td style="text-align: center"><xsl:value-of select="name"/></td>
                        <td style="text-align: center"><xsl:value-of select="score"/></td>
                        <td style="text-align: center"><xsl:value-of select="plan"/></td>
                        <td style="text-align: center"><xsl:value-of select="city"/></td> 
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
